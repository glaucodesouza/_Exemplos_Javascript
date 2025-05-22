function calcularDiferencaDiasEmHoras(data1, data2) {

    let   dataInicio  = new Date(data1),
            dataFim     = new Date(data2);

    let diferencaMs = dataFim - dataInicio;
  
    let horas       = Math.floor(diferencaMs / (1000 * 60 * 60));
    let minutos     = Math.floor((diferencaMs % (1000 * 60 * 60)) / (1000 * 60));
    let segundos    = Math.floor((diferencaMs % (1000 * 60)) / 1000);

    let horasFormatadas     = horas.toString().padStart(2, '0');
    let minutosFormatados   = minutos.toString().padStart(2, '0');
    let segundosFormatados  = segundos.toString().padStart(2, '0');

    return `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}
