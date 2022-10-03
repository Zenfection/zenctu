<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Contacts</title>

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">    
    <link href="/css/sticky-footer.css" rel="stylesheet">
    <link href="/css/font-awesome.min.css" rel="stylesheet">
    <link href="/css/animate.css" rel="stylesheet">   
</head>
<body>
    <?php include('../parts/navbar.php') ?>

    <!-- Main Page Content --> 
    <div class="container">
        <section id="inner" class="inner-section section">
            <div class="container">

                <!-- SECTION HEADING -->
                <h2 class="section-heading text-center wow fadeIn" data-wow-duration="1s">Contacts</h2>
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 text-center">
                        <p class="wow fadeIn" data-wow-duration="2s">Add your contacts here.</p>
                    </div>
                </div>

                <div class="inner-wrapper row">
                    <div class="col-md-12">

                        <form name="frm" id="frm" action="" method="post" class="col-md-6 col-md-offset-3">

                            <!-- Name -->
                            <div class="form-group<?=isset($errors['name']) ? ' has-error' : '' ?>">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" maxlen="255" id="name" placeholder="Enter Name" 
                                    value="<?=isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '' ?>" />

                                <?php if (isset($errors['name'])): ?>
                                    <span class="help-block">
                                        <strong><?=htmlspecialchars($errors['name'])?></strong>
                                    </span>
                                <?php endif ?>                                 
                            </div>

                            <!-- Phone -->
                            <div class="form-group<?=isset($errors['phone']) ? ' has-error' : '' ?>">
                                <label for="phone">Phone Number</label>
                                <input type="text" name="phone" class="form-control" maxlen="255" id="phone" placeholder="Enter Phone" 
                                    value="<?=isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '' ?>" />

                                <?php if (isset($errors['phone'])): ?>
                                    <span class="help-block">
                                        <strong><?=htmlspecialchars($errors['phone'])?></strong>
                                    </span>
                                <?php endif ?>                                   
                            </div>

                            <!-- Description -->
                            <div class="form-group<?=isset($errors['notes']) ? ' has-error' : '' ?>">
                                <label for="description">Notes </label>
                                <textarea name="notes" id="notes" class="form-control" 
                                    placeholder="Enter notes (maximum character limit: 255)"><?=isset($_POST['notes']) ? htmlspecialchars($_POST['notes']) : '' ?></textarea>

                                <?php if (isset($errors['notes'])): ?>
                                    <span class="help-block">
                                        <strong><?=htmlspecialchars($errors['notes'])?></strong>
                                    </span>
                                <?php endif ?>                                 
                            </div>

                            <!-- Submit -->
                            <button type="submit" name="submit" id="submit" class="btn btn-primary">Add Contact</button>
                        </form>

                    </div>
                </div>

            </div>
        </section>
    </div> 

    <?php include('../parts/footer.php') ?>  

    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="/js/wow.min.js"></script>
    <script>
        $(document).ready(function(){
            new WOW().init();          
        });
    </script>
</body>
</html>
