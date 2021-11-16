<?php

if (file_get_contents('php://input') != '') {
    $rawRequest = json_decode(file_get_contents('php://input'), true);
} else {
    $rawRequest = array();
}

$rawRequest['clientStateDataIndicator'] = null;
$rawRequest['merchantAccount'] = 'AdamStiskala35209';
$rawRequest['reference'] = 'PAYPAL_TEST';
$rawRequest['amount']['currency'] = 'AUD';
$rawRequest['amount']['value'] = 0;
$rawRequest['returnUrl'] = 'http://localhost:3000/';
$rawRequest['shopperReference'] = 'AdamStiskalaPayPalTest';
$rawRequest['storePaymentMethod'] = true;

$request = json_encode($rawRequest);
$url = "https://checkout-test.adyen.com/v67/payments";

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
