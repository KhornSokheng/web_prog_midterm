import React from 'react'


export default function contectus() {
    return (
        <div class = "contectus">
            <h1>Contectus</h1>
        <form>
        <div class = "E_Email">
            <input placeholder = "Email" type ="text" id="Email" name="Email" class ="control"></input>
            </div>
        <div class = "E_name">
            <input placeholder = "name" type ="text" id="Name" name="Name" class ="control"></input>
            </div>
        <div class = "E_text">
        <textarea name="message" id="message" class="control" rows="6" placeholder="Your Message ..."></textarea>
            </div>
        <div class = "b_send">
            <button type = "submid" class = "btn_send">Send</button>
        </div>
        </form>
        </div>
    )
}