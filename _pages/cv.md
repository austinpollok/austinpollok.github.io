---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
  
  <!-- Academic Positions -->
  <div style="background: #f8f9fa; padding: 3rem; border-radius: 8px; border-left: 4px solid #3498db; margin-bottom: 3rem;">
    <h2 style="color: #2c3e50; font-size: 2rem; margin-bottom: 2rem; font-weight: 400;">Academic Positions</h2>
    
    <div style="margin-bottom: 2rem;">
      <h3 style="color: #3498db; font-size: 1.4rem; margin-bottom: 0.5rem; font-weight: 500;">University of Southern California</h3>
      <p style="color: #7f8c8d; font-size: 1.1rem; margin-bottom: 0.5rem;">2024 - present</p>
      <p style="color: #2c3e50; font-size: 1.2rem; font-weight: 500; margin-bottom: 1rem;">Assistant Professor of Clinical Finance and Business Economics (Joint Appointment)</p>
    </div>
    
    <div>
      <h3 style="color: #3498db; font-size: 1.4rem; margin-bottom: 0.5rem; font-weight: 500;">University of Southern California</h3>
      <p style="color: #7f8c8d; font-size: 1.1rem; margin-bottom: 0.5rem;">2022 - present</p>
      <p style="color: #2c3e50; font-size: 1.2rem; font-weight: 500; margin-bottom: 0;">Assistant Professor of Clinical Data Science and Operations</p>
    </div>
  </div>

  <!-- Education -->
  <div style="background: #f8f9fa; padding: 3rem; border-radius: 8px; border-left: 4px solid #e74c3c; margin-bottom: 3rem;">
    <h2 style="color: #2c3e50; font-size: 2rem; margin-bottom: 2rem; font-weight: 400;">Education</h2>
    
    <div style="margin-bottom: 2rem;">
      <h3 style="color: #e74c3c; font-size: 1.4rem; margin-bottom: 0.5rem; font-weight: 500;">University of Southern California</h3>
      <p style="color: #7f8c8d; font-size: 1.1rem; margin-bottom: 0.5rem;">2022</p>
      <p style="color: #2c3e50; font-size: 1.2rem; font-weight: 500; margin-bottom: 0.5rem;">Ph.D. Applied Mathematics (defended November 2021)</p>
      <p style="color: #2c3e50; font-size: 1.1rem; margin-bottom: 0.5rem;"><strong>Dissertation:</strong> High-Frequency Kelly Criterion and Fat-Tails: Gambling with an Edge</p>
      <p style="color: #2c3e50; font-size: 1.1rem; margin-bottom: 0;"><strong>Advisor:</strong> Jianfeng Zhang</p>
    </div>
    
    <div>
      <h3 style="color: #e74c3c; font-size: 1.4rem; margin-bottom: 0.5rem; font-weight: 500;">University of California, Irvine</h3>
      <p style="color: #7f8c8d; font-size: 1.1rem; margin-bottom: 0.5rem;">2016</p>
      <p style="color: #2c3e50; font-size: 1.2rem; font-weight: 500; margin-bottom: 0;">B.S. Mathematics</p>
    </div>
  </div>

  <!-- Students -->
  <div style="background: #f8f9fa; padding: 3rem; border-radius: 8px; border-left: 4px solid #f39c12; margin-bottom: 3rem;">
    <h2 style="color: #2c3e50; font-size: 2rem; margin-bottom: 2rem; font-weight: 400;">Students</h2>
    <h3 style="color: #f39c12; font-size: 1.4rem; margin-bottom: 1.5rem; font-weight: 500;">PhD Committee Member & Co-advising</h3>
    
    <div style="margin-bottom: 1.5rem;">
      <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 0.5rem;">
        <strong>Levon Hakobyan</strong>, Department of Mathematics, University of Southern California
      </p>
      <p style="color: #7f8c8d; font-size: 1rem; margin-bottom: 0;">
        Currently 5th-year PhD student (co-advising with Sergey Lototsky, USC Math Dept.)
      </p>
    </div>
    
    <div>
      <p style="color: #2c3e50; line-height: 1.7; margin-bottom: 0.5rem;">
        <strong>Benjamin Gillen</strong>, Department of Mathematics, University of Southern California
      </p>
      <p style="color: #7f8c8d; font-size: 1rem; margin-bottom: 0;">
        Currently 4th-year PhD student (co-advising with Gourab Mukherjee, USC DSO Dept.)
      </p>
    </div>
  </div>

  <!-- Publications -->
  <div style="background: #f8f9fa; padding: 3rem; border-radius: 8px; border-left: 4px solid #27ae60; margin-bottom: 3rem;">
    <h2 style="color: #2c3e50; font-size: 2rem; margin-bottom: 2rem; font-weight: 400;">Publications</h2>
    <ul style="color: #2c3e50; line-height: 1.8; margin: 0; padding-left: 1.5rem;">
      {% for post in site.publications reversed %}
        {% include archive-single-cv.html %}
      {% endfor %}
    </ul>
  </div>

  <!-- Teaching -->
  <div style="background: #f8f9fa; padding: 3rem; border-radius: 8px; border-left: 4px solid #9b59b6;">
    <h2 style="color: #2c3e50; font-size: 2rem; margin-bottom: 2rem; font-weight: 400;">Teaching</h2>
    <ul style="color: #2c3e50; line-height: 1.8; margin: 0; padding-left: 1.5rem;">
      {% for post in site.teaching reversed %}
        {% include archive-single-cv.html %}
      {% endfor %}
    </ul>
  </div>

</div>
