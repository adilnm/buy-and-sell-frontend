import React from 'react'
import { Dropdown, DropdownButton } from "react-bootstrap";

export default function Categories() {
    return (
        <DropdownButton variant="secondary" id="dropdown-item-button" title="Categories" onSelect={function(evt){debugger}}>
            <Dropdown.Item as="button" eventKey="0">All</Dropdown.Item>
            <Dropdown.Item as="button" eventKey="1">Electronics</Dropdown.Item>
            <Dropdown.Item as="button" eventKey="2">Hobbies</Dropdown.Item>
            <Dropdown.Item as="button" eventKey="3">Home & Garden</Dropdown.Item>
            <Dropdown.Item as="button" eventKey="4">Vehicles</Dropdown.Item>
            <Dropdown.Item as="button" eventKey="5">Clothing & Accessories</Dropdown.Item>
            <Dropdown.Item as="button" eventKey="6">Rentals</Dropdown.Item>
            <Dropdown.Item as="button" eventKey="7">Family</Dropdown.Item>
            <Dropdown.Item as="button" eventKey="8">Entertainment</Dropdown.Item>
            <Dropdown.Item as="button" eventKey="9">Deals</Dropdown.Item>
        </DropdownButton>
    )
}
