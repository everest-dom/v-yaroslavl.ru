<?php

if(!empty($_POST['phone_mobile'])) {
$roistatData = array(
    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : null,
    'key'     => 'MTM4OTg6MzM5ODA6Nzg5MWMyYjgyYTUzMTY0YzY5ODdlYTEyMzBmOGRiYmE=',
    //'title'   => 'Сделка с сайта ' . $_POST['location_c'],
    'title'   => 'Сделка с сайта '.$_SERVER['SERVER_NAME'], //скрипт сам вытягивает названия (домен) сайта
    'comment' => 'Форма: ' . $_POST['hidden'],
    'name'    => isset($_POST['last_name']) ? $_POST['last_name'] : null,
    'email'   => null,
    'phone'   => isset($_POST['phone_mobile']) ? $_POST['phone_mobile'] : null,    
    'fields'  => array(
    	'398771' => isset($_POST['utm_source_c']) ? $_POST['utm_source_c'] : '(direct)',
    	'398773' => isset($_POST['utm_campaign_c']) ? $_POST['utm_campaign_c'] : '(none)',
    	'398775' => isset($_POST['utm_medium_c']) ? $_POST['utm_medium_c'] : '(none)',
    	'398777' => isset($_POST['utm_content_c']) ? $_POST['utm_content_c'] : '(none)',
    	'398779' => isset($_POST['utm_term_c']) ? $_POST['utm_term_c'] : '(none)',
    	'537747' => isset($_POST['location_c']) ? $_POST['location_c'] : 'Не указано',
    	'398781' => isset($_POST['clientid_c']) ? $_POST['clientid_c'] : 'Не указано',
    	'448347' => isset($_POST['ua_id_c']) ? $_POST['ua_id_c'] : 'Не указано',
    ),
);

file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($roistatData));
@include $_SERVER["DOCUMENT_ROOT"] . '/r7k12_r.php';
}

header('Location: https://townsbuilders.com/sever1/test.php');