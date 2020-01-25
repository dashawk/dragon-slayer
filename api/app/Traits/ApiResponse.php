<?php

namespace App\Traits;

trait ApiResponse {
    public function response($data = [], $message = '', $status = 200)
    {
        $temp = [];

        if (is_array($data) && !isset($data['data'])) {
            $temp['data'] = $data;
        } else if (isset($data['data'])) {
            $temp = $data;
        }

        if (is_string($data) && $message === '') {
            $temp['message'] = $data;
        } else if ($message !== '') {
            $temp['message'] = $message;
        }

        $temp['status'] = $status;

        return response()->json($temp, $status);
    }
}