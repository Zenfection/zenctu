<?php

namespace App\Controllers;

use App\SessionGuard as Guard;

class HomeController extends Controller
{
    public function __construct()
    {
        if (! Guard::isUserLoggedIn()) {
            exit_redirect('/login');
        }

        parent::__construct();
    }

    public function index()
    {
        $data = [];
        $this->sendPage('home', $data);
    }
}
