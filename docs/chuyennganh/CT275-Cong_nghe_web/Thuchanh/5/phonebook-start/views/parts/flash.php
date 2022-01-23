<?php if(isset($messages['success'])): ?>
    <div class="alert alert-success">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <?=$this->e($messages['success'])?>
    </div>
<?php elseif (isset($messages['error'])): ?>
    <div class="alert alert-danger">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <?=$this->e($messages['error'])?>
    </div>
<?php endif ?>
