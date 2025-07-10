import React from "react";
import RazorpayButton from "./components/RazorpayButton"; // Adjust path if needed

export default function Home() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#111',
      color: '#fff',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2.5rem' }}>Welcome to Indianode.com</h1>
      <p>Your decentralized GPU provider on the Akash Network.</p>

      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>🔧 What We Offer</h2>
      <ul>
        <li>🎙️ Whisper Speech-to-Text API</li>
        <li>🎨 Stable Diffusion Image Generation</li>
        <li>🔐 VPN Access</li>
        <li>📦 Custom GPU Rental on Akash</li>
      </ul>

      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>💸 Quick Payment</h2>
      <p>We accept crypto (AKT) and INR via Razorpay.</p>
      <RazorpayButton />

      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>🌐 VPN Plans</h2>
      <p>
        <a href="/vpn" style={{
          color: '#4ade80',
          textDecoration: 'underline',
          fontWeight: 'bold'
        }}>
          View VPN Pricing & Plans
        </a>
      </p>

      <h2 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>📞 Contact</h2>
      <p>Email: tvavinash@gmail.com</p>
      <p>WhatsApp: +91-9902818004</p>
    </main>
  );
}
