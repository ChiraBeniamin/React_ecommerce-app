import React, { Component } from "react";
import "./CartOverlay.css";

export default class CartOverlay extends Component {
  render() {
    return (
      <div>
        <li className="pop-up-button" href="#pop-up-one">
          {/* <p>My cart<//p> */}
          My cart
          {/* <i className="fa fa-shopping-cart"></i> */}
        </li>
        <div id="pop-up-one" className="pop-up-overlay">
          <div className="pop-up">
            <h1>Orange County</h1>
            <a className="close" href="#">
              &times;
            </a>
            <p>
              {/* Ethical messenger bag waistcoat raclette. Forage scenester af air
              plant williamsburg. DIY forage tote bag, pinterest tumeric venmo
              distillery la croix salvia +1 swag. Vinyl kale chips copper mug
              celiac man bun vexillologist, iceland try-hard gentrify man braid
              tousled. Try-hard typewriter subway tile swag migas tumeric.
              Raclette cred pok pok DIY twee. Biodiesel pabst craft beer
              church-key skateboard. */}
              hello
            </p>
          </div>
        </div>
      </div>
    );
  }
}
