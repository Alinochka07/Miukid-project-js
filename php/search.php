<?php

$_POST = json_decode(file_get_contents('php://input'), true);

// print_r($_POST);

if ($_POST['query'] == "jack") {
    $result = array(
        array(
            "text" => "jacket",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=jacket"
        ),
        array(
            "text" => "jacket Women",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Jacket%20Women"
        ),
        array(
            "text" => "jacket Men",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Jacket%20Men"
        ),
        array(
            "text" => "jackets and Coats",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Jackets%20And%20Coats"
        )
    );
} elseif ($_POST['query'] == "sweat") {
    $result = array(
        array(
            "text" => "Sweater",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater"
        ),
        array(
            "text" => "Sweater Women",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater%20Women"
        ),
        array(
            "text" => "Sweater Men",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater%20Men"
        ),
        array(
            "text" => "Sweater Vest",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater%20Vest"
        ),
        array(
            "text" => "Sweater Cotton",
            "href" => "https://www.uniqlo.com/eu/en/asearch?q=Sweater%20Cotton"
        ),
    );
}

echo json_encode($result);



?>