import React from "react";
import RazorpayButton from "./components/RazorpayButton"; // adjust path if needed

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#111', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem' }}>Welcome to Indianode.com</h1>
      <p>Your decentralized GPU provider on the Akash Network.</p>

      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>🔧 Services</h2>
      <ul>
        <li>🎙️ Whisper Speech-to-Text API</li>
        <li>🎨 Stable Diffusion Image Generation</li>
        <li>🔐 VPN Access</li>
        <li>📦 Custom GPU Rental</li>
      </ul>

      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>💳 Payments</h2>
      <p>We accept crypto (AKT) and INR via Razorpay.</p>

      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>💸 Quick Payment</h2>
      <RazorpayButton />

      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>📞 Contact</h2>
      <p>Email: support@indianode.com</p>
      <p>WhatsApp: +91-XXXXXXXXXX</p>
    </main>
  );
}
