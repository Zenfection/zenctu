<?php

define('ROOTDIR', realpath(dirname(__DIR__)) . DIRECTORY_SEPARATOR);
define('APPNAME', 'My Phonebook');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once ROOTDIR . 'vendor/autoload.php';
require_once ROOTDIR . 'db.php';

session_start();

use NoahBuscher\Macaw\Macaw as Router;

if (! ob_get_level()) {
    ob_start();
}

// Auth routes
Router::post('/logout', '\App\Controllers\Auth\LoginController@logout');
Router::get('/register', '\App\Controllers\Auth\RegisterController@showRegisterForm');
Router::post('/register', '\\App\Controllers\Auth\RegisterController@register');
Router::get('/login', '\App\Controllers\Auth\LoginController@showLoginForm');
Router::post('/login', '\App\Controllers\Auth\LoginController@login');

// Contact routes
Router::get('/', '\App\Controllers\HomeController@index');
Router::get('/home', '\App\Controllers\HomeController@index');

Router::dispatch();

ob_end_flush();

