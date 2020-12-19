"use strict";
const handleArtistsResponse = (response) => {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
