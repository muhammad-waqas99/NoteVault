import React from 'react';
import '../css/About.css';

const About = () => {
  return (
    <div className="nv-about-wrapper">
      <div className="nv-about-card">
        <h1 className="nv-about-title">About NoteVault</h1>
        
        <p className="nv-about-intro">
          Welcome to <strong>NoteVault</strong> — a simple and secure place to keep your notes organized.
        </p>

        <section className="nv-about-section">
          <h3>What You Can Do</h3>
          <ul>
            <li>Create and manage unlimited personal notes.</li>
            <li>Edit your notes anytime.</li>
            <li>Delete notes with confirmation to prevent accidental removal.</li>
            <li>Pin important notes so they always stay at the top.</li>
            <li>Organize notes using predefined tags.</li>
            <li>Quickly search notes by title or description.</li>
            <li>Filter notes by tags to find what you need faster.</li>
            <li>Access your notes securely through your personal account.</li>
          </ul>
        </section>

        <section className="nv-about-section">
          <h3>Why NoteVault?</h3>
          <p>
            The goal of NoteVault is to make note-taking fast, simple, and organized. 
            Instead of dealing with cluttered interfaces, you can focus on what matters most — your ideas.
          </p>
        </section>

        <section className="nv-about-section">
          <h3>Your Privacy</h3>
          <p>
            Your notes belong to you. Each account has access only to its own data 
            through secure authentication, helping keep your information safe and private.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;