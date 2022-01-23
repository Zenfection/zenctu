<?php

namespace App\Controllers\Auth;

use App\Models\User;
use App\Controllers\Controller;
use App\SessionGuard as Guard;

class LoginController extends Controller
{
	public function showLoginForm()
	{
		if (Guard::isUserLoggedIn()) {
			exit_redirect('/home');
		}

		$data = [
			'messages' => session_get_once('messages'),
			'old' => $this->getSavedFormValues(),
			'errors' => session_get_once('errors')
		];

		$this->sendPage('auth/login', $data);
	}

	public function login()
	{
		$user_credentials = $this->filterUserCredentials($_POST);

		$errors = [];
		$user = User::where('email', $user_credentials['email'])->first();
		if (!$user) {
			// Người dùng không tồn tại...
			$errors['email'] = 'Invalid email or password.';
		} else if (Guard::login($user, $user_credentials)) {
			// Đăng nhập thành công...
			exit_redirect('/home');
		} else {
			// Sai mật khẩu...
			$errors['password'] = 'Invalid email or password.';
		}

		// Đăng nhập không thành công: lưu giá trị trong form, trừ password
		$this->saveFormValues($_POST, ['password']);
		exit_redirect('/login', ['errors' => $errors]);
	}

	public function logout()
	{
		Guard::logout();
		exit_redirect('/login');
	}

	protected function filterUserCredentials(array $data)
	{
		return [
			'email' => filter_var($data['email'], FILTER_VALIDATE_EMAIL),
			'password' => $data['password']
		];
	}
}
