import React from 'react'
import {  Dropdown, Image, MenuItem } from 'semantic-ui-react'

export default function SignIn(props) {
    return (
        <div>
            <MenuItem>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/962430458511417344/JGApRpdl_400x400.jpg"></Image>
                <Dropdown pointing = "top left" text = "Selahattin">
                <Dropdown.Menu>
                    <Dropdown.Item text = "Bilgilerim" icon = "info"/>
                    <Dropdown.Item onClick={props.signOut} text = "Çıkış Yap" icon= "sign-out"/>
                </Dropdown.Menu>
                </Dropdown>
            </MenuItem>
        </div>
    )                                                                                                                      
}
