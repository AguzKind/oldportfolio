function CopiarTexto() {
let text = document.getElementById('miEmail').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Email copiado en el portapapeles');
    } catch (err) {
      console.error('No se pudo copiar el email: ', err);
    }
  }
}