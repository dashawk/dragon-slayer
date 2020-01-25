<?php

Route::post('login', 'Auth\LoginController@authenticate');
Route::post('register', 'Auth\RegisterController@create');
