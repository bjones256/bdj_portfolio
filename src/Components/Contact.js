import React, { Component } from 'react';



export default class Contact extends Component {
  render() {
    return (
        <div id="formComponent">
        <h1>Let's build some shit!</h1>
            <form>
            <div class="form-row">
                <div class="form-group col-md-6">

                <input type="email" class="form-control" id="inputFirst" placeholder="First Name"/>
                </div>
                <div class="form-group col-md-6">

                <input type="password" class="form-control" id="inputLast" placeholder="Last Name"/>
                </div>
                <div class="form-group col-md-6">

                <input type="password" class="form-control" id="inputLast" placeholder="Phone Number"/>
                </div>
                <div class="form-group col-md-6">

                <input type="password" class="form-control" id="inputLast" placeholder="Company"/>
                </div>
            </div>
            <div class="form-group">

                <input type="text" class="form-control" id="inputEmail" placeholder="email@email.com"/>
            </div>
            <div className="col-xs-12">
            <div class="form-check form-check-inline ">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Short term project</label>
            </div>
            <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">Full</label>
            </div>
            </div>
            <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Tell me about your project"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Message Brian</button>
            </form>
        </div>
);
  }
}

