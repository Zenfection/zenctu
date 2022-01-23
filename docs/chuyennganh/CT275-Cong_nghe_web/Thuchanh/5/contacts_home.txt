<?php $this->layout("layouts/default", ["title" => APPNAME]) ?>

<?php $this->start("page_specific_css") ?>
    <link href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="//cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css" rel="stylesheet">
<?php $this->stop() ?>

<?php $this->start("page") ?>
<div class="container">
    <section id="inner" class="inner-section section">
            <!-- SECTION HEADING -->
            <h2 class="section-heading text-center wow fadeIn" data-wow-duration="1s">Contacts</h2>
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center">
                    <p class="wow fadeIn" data-wow-duration="2s">View your all contacs here.</p>
                </div>
            </div>

            <div class="inner-wrapper row">
                <div class="col-md-12">
                
                    <!-- FLASH MESSAGES HERE -->

                    <a href="/contacts/add" class="btn btn-primary" style="margin-bottom: 30px;">
                        <i class="fa fa-plus"></i> New Contact</a>

                    <!-- Table Starts Here -->
                    <table id="contacts" class="table table-bordered table-responsive table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Date Created</th>
                                <th>Notes</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php foreach($contacts as $contact): ?>
                            <tr>
                                <td><?=$this->e($contact->name)?></td>
                                <td><?=$this->e($contact->phone)?></td>
                                <td><?=$this->e(date("d-m-Y", strtotime($contact->created_at)))?></td>
                                <td><?=$this->e($contact->notes)?></td>
                                <td><a href="/contacts/edit/<?=$this->e($contact->id)?>" 
                                class="btn btn-xs btn-warning">
                                <i alt="Edit" class="fa fa-pencil"> Edit</i></a>
                                <form class="delete" action="/contacts/delete/<?=$this->e($contact->id)?>" 
                                        method="POST" style="display: inline;">
                                    <button type="submit" class="btn btn-xs btn-danger" name="delete-contact">
           	                            <i alt="Delete" class="fa fa-trash"> Delete</i>
                                    </button>
                                </form></td>
                            </tr>
                        <?php endforeach ?>
                        </tbody>
                    </table>
                    <!-- Table Ends Here -->
                </div>
            </div>
    </section>
</div>
<?php $this->stop() ?>

<?php $this->start("page_specific_js") ?>
    <script src="//cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
    <script src="//cdn.datatables.net/1.10.12/js/dataTables.bootstrap.min.js"></script>  
    <script>
        $(document).ready(function(){
            new WOW().init();
            
            $('#contacts').DataTable();           
        });
    </script>
<?php $this->stop() ?>
