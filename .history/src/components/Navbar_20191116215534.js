import React from 'react';
import {Link} from "react-router-dom";

class SectionNavbar extends React.Component {
    render() {
        return (
            <div>
           <nav class="navbar navbar-expand-lg  navbar">
           <a class="navbar-brand display-on-in-desktop" href="#">COMPARADOR DE PLANES</a>
           <a class="navbar-brand display-on-in-mobile" href="#">CP</a>
                <button class="display-on-in-mobile" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-one"> <i class="fa fa-bars"></i></span>
                </button>
                

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                   
                    <form class="form-inline my-2 my-lg-0">
                        <ul class="">
                            <li>a</li>
                            <li>a</li>
                            <li>a</li>
                        </ul>
                    </form>
                </div>
                </nav>
            </div>
        )
    }

}

export default SectionNavbar;