import fs from 'fs';
import path from 'path';

// Определяем пути к файлам
const GENERATED_HTML_PATH = path.join(__dirname, '../../../build', 'index.html');
const PHP_TEMPLATE_PATH = path.join(__dirname, '../../../public/btx-php-pacement', 'placement.php');
const PHP_OUTPUT_PATH = path.join(__dirname, '../../../build', 'placement.php');

// Читаем сгенерированный HTML файл
const htmlContent = fs.readFileSync(GENERATED_HTML_PATH, 'utf8');

// Читаем текущее содержимое PHP файла
const phpTemplateContent = fs.readFileSync(PHP_TEMPLATE_PATH, 'utf8');

// Создаем новое содержимое для PHP файла, вставляя HTML
const newPhpContent = `<?php
require_once(__DIR__ . '/crest.php');
?>
${htmlContent}`;

// Записываем новое содержимое в PHP файл
fs.writeFileSync(PHP_OUTPUT_PATH, newPhpContent, 'utf8');

console.log('HTML content has been inserted into the PHP file.');