<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Werkuren.local</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="testAsheet.css">
</head>
<body>
    <div class="MAINHREF"> <!-- Deze class zorgt ervoor dat de linkjes bovenaan in het midden kommen te staan -->
        <a href="http://localhost/C3TESTDB/">MAIN - FILE</a><br>
    </div>
    <?php // setup database
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "deelblokken";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);

        // Check connection
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
    ?>
  
        <!-- Carousel -->
        <div id="demo" class="carousel slide">
        
              <!-- Dit is carousel 1 / main-->
              
                            <?php
                                $sql = "SELECT * FROM setupblok";
                                $result = mysqli_query($conn, $sql);

                                //Ophalen van de gegevens (nieuwsartikelen) uit de database
                                if (mysqli_num_rows($result) > 0) {
                                        // output data of each row
                                        for ($pagina = 0; $pagina < 3; $pagina++){
                                                echo '<div class="carousel-item active">';
                                                echo '<div class="container">';
                                                echo '<div class="row">';
                                                    while($row = mysqli_fetch_assoc($result)) {
                                                        echo "<div class='col-sm-4'>";
                                                        echo "<h3>".$row["Header"]."</h3>";
                                                        echo "<p>".$row["tekstA"]."</p>";
                                                        echo "<p>".$row["tekstB"]."</p>";
                                                        echo "</div>";
                                        }
                                        echo "</div>";
                                        echo "</div>";
                                        echo "</div>";
                                    }} else {
                                        echo "0 results";
                                    }  
                            ?>

            <!-- Left and right controls/icons -->
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            </button>
        </div>
</body>
</html>

<?php
    mysqli_close($conn);
?>