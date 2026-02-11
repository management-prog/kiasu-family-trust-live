export default async function handler(req, res) {
 
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");


  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { recaptchaToken, ...formData } = body;

    console.log("----- NEW SUBMISSION -----");
    console.log("1. Received Data:", { ...formData, recaptchaToken: "HIDDEN" });

    if (!recaptchaToken) {
      console.error("X. Missing Token");
      return res.status(400).json({ error: "Missing reCAPTCHA token" });
    }


    console.log("2. Verifying with Google...");
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const googleResult = await verifyRes.json();
    console.log("3. Google Result:", googleResult.success, "Score:", googleResult.score);

    if (!googleResult.success || googleResult.score < 0.5) {
      console.error("X. Bot Detected:", googleResult["error-codes"]);
      return res.status(403).json({ error: "Security check failed." });
    }

   
    console.log("4. Forwarding to Formspree...");
    
   
    const formspreePayload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
 
      _source: "API_Middleware"
    };

    const formspreeRes = await fetch("https://formspree.io/f/xgvgldqk", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formspreePayload), 
    });

    
    const formspreeText = await formspreeRes.text();
    console.log("5. Formspree Response Status:", formspreeRes.status);
    console.log("6. Formspree Response Body:", formspreeText);

    if (!formspreeRes.ok) {
      throw new Error(`Formspree rejected: ${formspreeText}`);
    }

    console.log("----- SUCCESS -----");
    return res.status(200).json({ success: true });

  } catch (err) {
    console.error("!!! API ERROR !!!", err);
    return res.status(500).json({ error: err.message || "Transmission failed." });
  }
}