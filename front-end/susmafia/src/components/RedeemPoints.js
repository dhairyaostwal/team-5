import React from 'react';
import NavbarComponent from './NavbarComponent';
import './RedeemPoints.css';
function RedeemPoints() {
  return (
    <div>
      <NavbarComponent />
      <div class="card-category-2">
        <span class="category-name">Redeem Points</span> <br />
        <br />
        <ul>
          <li>
            <div class="img-card iCard-style1">
              <div class="card-content">
                <div class="card-image">
                  <span class="card-title">Udemy course offer</span>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIj1ITJnOXaUQN8xhogepIkgy0caBLivgrloObAUpcSyeGKguPjInvExzFOEHEPUoF7m4&usqp=CAU" />
                </div>

                <div class="card-text">
                  <p>
                    After earning these many points you get special offers on
                    udemy.
                  </p>
                </div>
              </div>

              <div class="card-link">
                <a href="https://www.udemy.com/" title="Read Full" />
                <a>Check it out</a>for 500 points
              </div>
            </div>
          </li>

          <li>
            <div class="img-card iCard-style1">
              <div class="card-content">
                <div class="card-image">
                  <img src="data:image/jpeg;base64,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" />
                </div>

                <div class="card-text">
                  <p>
                    After earning these many points you get special offers on
                    coursera.
                  </p>
                </div>
              </div>

              <div class="card-link">
                <a href="https://www.coursera.org/in" title="Read Full" />
                <a>Check it out</a> for 450 points
              </div>
            </div>
          </li>
          <li>
            <div class="img-card iCard-style1">
              <div class="card-content">
                <div class="card-image">
                  <img src="data:image/png;base64,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" />
                </div>

                <div class="card-text">
                  <p>
                    After earning these many points you get special offers on
                    Edx.
                  </p>
                </div>
              </div>

              <div class="card-link">
                <a href="https://www.edx.org/" title="Read Full" />
                <a>Check it out</a> for 300 points
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RedeemPoints;
