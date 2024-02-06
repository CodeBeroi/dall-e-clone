import { surpriseMePrompts } from '../constants'
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[randomIndex];

    // make sure we are not going to pick the same prompt two times in a row
    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage( _id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}