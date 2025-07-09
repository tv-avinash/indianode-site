import React from "react";

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
      <a href="https://rzp.io/l/indianode" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#4ade80', color: '#000', borderRadius: '0.5rem' }}>
        Pay via Razorpay
      </a>
      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>📞 Contact</h2>
      <p>Email: support@indianode.com</p>
      <p>WhatsApp: +91-XXXXXXXXXX</p>
    </main>
  );
}
