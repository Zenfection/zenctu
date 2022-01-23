<?php

if (! function_exists('clear_output_buffer')) {
    function clear_output_buffer() {
        if (ob_get_level()) {
            ob_end_clean();
        }
    }
}

if (! function_exists('http_accept_json')) {
    function http_accept_json() {
        return isset($_SERVER['HTTP_ACCEPT']) &&
            (strpos(strtolower($_SERVER['HTTP_ACCEPT']),'application/json') !== false);
    }
}

if (! function_exists('exit_redirect')) {
    // Chuyển hướng đến một trang khác
    function exit_redirect($location, array $data = [])
    {
        clear_output_buffer();

        foreach($data as $key => $value) {
            $_SESSION[$key] = $value;
        }

        header('Location: ' . $location);
        exit();
    }    
}

if (! function_exists('session_get_once')) {
    // Đọc và xóa một biến trong $_SESSION
    function session_get_once($name, $default = null)
    {
        $value = $default;
        if (isset($_SESSION[$name])) {
            $value = $_SESSION[$name];
            unset($_SESSION[$name]);      
        }
        return $value;
    }
}
