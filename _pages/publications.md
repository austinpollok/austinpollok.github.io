---
layout: archive
title: "Research"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
  
  <!-- Research Interests -->
  <div style="background: #f8f9fa; padding: 3rem; border-radius: 8px; border-left: 4px solid #3498db; margin-bottom: 3rem;">
    <h2 style="color: #2c3e50; font-size: 2rem; margin-bottom: 2rem; font-weight: 400;">Research Interests</h2>
    <p style="color: #2c3e50; font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem;">
      Application of modern machine learning techniques in quantitative and empirical finance
    </p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
      <div>
        <h4 style="color: #3498db; font-size: 1.2rem; margin-bottom: 1rem; font-weight: 500;">Core Areas</h4>
        <ul style="color: #2c3e50; line-height: 1.8; margin: 0; padding-left: 1.5rem;">
          <li>Volatility modeling</li>
          <li>Empirical option pricing, return predictability, and microstructure</li>
          <li>Optimal portfolio and ETF construction</li>
        </ul>
      </div>
      
      <div>
        <h4 style="color: #3498db; font-size: 1.2rem; margin-bottom: 1rem; font-weight: 500;">Advanced Techniques</h4>
        <ul style="color: #2c3e50; line-height: 1.8; margin: 0; padding-left: 1.5rem;">
          <li>Deep learning and deep reinforcement learning for systematic trading strategies</li>
          <li>Causal inference for transaction cost modeling</li>
          <li>Blockchain technology and De-Fi (automated market makers)</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Publications -->
  <div style="background: #f8f9fa; padding: 3rem; border-radius: 8px; border-left: 4px solid #e74c3c; margin-bottom: 3rem;">
    <h2 style="color: #2c3e50; font-size: 2rem; margin-bottom: 2rem; font-weight: 400;">Publications and Forthcoming Papers</h2>
    
    <div style="margin-bottom: 2rem;">
      <h4 style="color: #e74c3c; font-size: 1.3rem; margin-bottom: 1rem; font-weight: 500;">PhD Thesis</h4>
      <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 1rem;">
        <strong>"High-Frequency Kelly Criterion and Fat-Tails: Gambling with an Edge,"</strong><br>
        ProQuest Dissertations and Theses, 2022
      </p>
    </div>
    
    <div style="margin-bottom: 2rem;">
      <h4 style="color: #e74c3c; font-size: 1.3rem; margin-bottom: 1rem; font-weight: 500;">Journal Publications</h4>
      <div style="margin-bottom: 1.5rem;">
        <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 0.5rem;">
          <strong>"Kelly Criterion: From a Simple Random Walk to Lévy Processes,"</strong><br>
          SIAM Journal of Financial Mathematics, 2021, 12-1, 342-368, with Sergey Lototsky
        </p>
      </div>
      <div>
        <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 0;">
          <strong>"Transient Feedback and Robust Signaling Gradients. Appendix: Feedback on Receptor Synthesis Rate,"</strong><br>
          International Journal of Numerical Analysis and Modeling, 2016, with Frederic Y. Wan
        </p>
      </div>
    </div>
  </div>

  <!-- Working Papers -->
  <div style="background: #f8f9fa; padding: 3rem; border-radius: 8px; border-left: 4px solid #27ae60;">
    <h2 style="color: #2c3e50; font-size: 2rem; margin-bottom: 2rem; font-weight: 400;">Working Papers and Work in Progress</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 2rem;">
      <div>
        <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 1.5rem;">
          <strong>"Modeling Wallet-Level Behavioral Shifts Post-FTX Collapse: An XAI-Driven GLM Study on Ethereum Transactions,"</strong> (2025)<br>
          with Benjamin Gillen, Rashmi Ranjan Bhuyan, and Gourab Mukherjee<br>
          <em style="color: #7f8c8d;">Submitted 2025</em>
        </p>
        
        <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 1.5rem;">
          <strong>"High-Frequency Multivariate Sequence Modeling for Intraday S&P 500 Volatility and 0DTE Options Mispricing,"</strong> (2024)<br>
          with Christopher S. Jones
        </p>
        
        <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 1.5rem;">
          <strong>"Nonlinear Shrinkage Estimation for High Dimensional Hidden Markov Models,"</strong> (2024)<br>
          with Gourab Mukherjee
        </p>
      </div>
      
      <div>
        <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 1.5rem;">
          <strong>"Alpha Term Structure in Corporate Bonds for Pricing and Hedging,"</strong> (2024)<br>
          with Petter Kolm and Terry Benzschawel
        </p>
        
        <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 0;">
          <strong>"Is the Kelly Criterion Just Another Utility Function?,"</strong> (2022)<br>
          with Peter Carr
        </p>
      </div>
    </div>
  </div>

  {% if site.author.googlescholar %}
    <div style="background: white; padding: 2rem; border-radius: 8px; border: 1px solid #ecf0f1; margin-top: 3rem; text-align: center;">
      <p style="color: #2c3e50; margin: 0;">
        You can also find my articles on <a href="{{site.author.googlescholar}}" style="color: #3498db; text-decoration: none; font-weight: 500;">my Google Scholar profile</a>.
      </p>
    </div>
  {% endif %}

</div>
