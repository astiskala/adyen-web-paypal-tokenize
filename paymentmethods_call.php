<?php

$url = "https://checkout-test.adyen.com/v67/paymentMethods";
$request = '{ "merchantAccount": "AdamStiskala35209", "allowedPaymentMethods": ["paypal"] }';

$curlAPICall = curl_init();

$method = "POST";
curl_setopt($curlAPICall, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curlAPICall, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curlAPICall, CURLOPT_POSTFIELDS, $request);
curl_setopt($curlAPICall, CURLOPT_URL, $url);
curl_setopt($curlAPICall, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curlAPICall, CURLOPT_HEADER, 1);

$headers = array(
    "X-Api-Key: " . getenv('API_KEY'),
    "Content-Type: application/json",
    "Content-Length: " . strlen($request)
);

curl_setopt($curlAPICall, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($curlAPICall);
if ($result === false){
  throw new Exception(curl_error($curlAPICall), curl_errno($curlAPICall));
}

$header_size = curl_getinfo($curlAPICall, CURLINFO_HEADER_SIZE);
$header = substr($result, 0, $header_size);
$body = substr($result, $header_size);

curl_close($curlAPICall);

echo $body;
