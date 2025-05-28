import planetas from './planetas.js';
import chalk from 'chalk';

planetas.forEach(planeta => {
    console.log(chalk.blue.bold(`¡Planeta ${planeta.nombre} descubierto!`));
    console.log(`Descripcion: ${planeta.descripcion}`);
    console.log(`Descubierto en: ${planeta.descubiertoEn}`);
});