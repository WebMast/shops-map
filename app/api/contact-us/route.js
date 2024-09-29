import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const data = await req.json();
        const filePath = path.join(process.cwd(), 'data', 'formData.json');
        let existingData = [];

        try {
            const fileContent = await fs.readFile(filePath, 'utf-8');
            existingData = JSON.parse(fileContent);
        } catch (error) {
            console.log('Файл ще не існує, створюємо новий.');
        }

        existingData.push(data);

        await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

        return new Response(JSON.stringify({ message: 'Дані успішно збережені' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Помилка при записі даних:', error);
        return new Response(JSON.stringify({ message: 'Не вдалося зберегти дані' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}