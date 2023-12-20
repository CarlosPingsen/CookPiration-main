import React, { useState, children } from 'react'
import NavbarSebelumLogin from '../components/NavbarSebelumLogin'
import Footer from '../components/Footer'
import Paginasi from '../components/Paginasi';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Pagination from 'react-bootstrap/Pagination';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookmark, faUser, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-router-dom';




    const SearchBar = ({
        handleSubmit,
        query,
        isLoading,
        setQuery
    }) => {
        return (
            

            <form class="forminput" onSubmit={handleSubmit}>
                <input class="inputbutton"
                    value={query}
                    className="form-control"
                    placeholder="Search Recipe"
                    name="query"
                    disabled={isLoading}
                    onChange={(event) => setQuery(event.target.value)}
                />   
                <input class="inputbutton"
                    disabled={isLoading || !query}
                    type="submit"
                    className="btn"
                    value="Search"
                />
            </form>
        )
    };

export default SearchBar;