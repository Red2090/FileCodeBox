export default {
  send: {
    disclaimers:'Descripción de la página',
    prompt1: 'Arrastre o pegue texto, archivos aquí, o ',
    prompt2: 'Días (<7) o limitar veces (eliminar después de 24h)',
    prompt3: 'Por favor, introduzca el texto que desea enviar, soporta formato MarkDown',
    share: 'Compartir',
    textShare: 'Compartir texto',
    clickUpload: 'Hacer clic para cargar',
    pleaseInputExpireValue: 'Por favor, introduzca el valor de expiración',
    expireStyle: 'Estilo de expiración',
    expireData: {
      day: 'Días',
      hour: 'Horas',
      forever: 'Para siempre',
      minute: 'Minutos',
      count: 'Veces'
    },
    expireValue: {
      day: 'Día',
      hour: 'Hora',
      minute: 'Minuto',
      count: 'Vez'
    },
    fileType: {
      file: 'Archivo',
      text: 'Texto'
    }
  },
  fileBox: {
    copySuccess: 'Copiado con éxito',
    inputNotEmpty: 'Por favor, introduzca un código de recogida de cinco dígitos',
    sendFileBox: 'Caja de envío',
    ok:'Aceptar',
    receiveFileBox: 'Caja de recepción',
    textDetail: 'Detalles del texto',
    copy: 'Copiar',
    close: 'Cerrar',
    delete: 'Eliminar',
    download: 'Haz clic para descargar',
    detail: 'Ver detalles',
    copyLink: 'Copiar enlace',
  },
  admin: {
    about: {
      source1: 'El proyecto es de código abierto en Github: ',
      source2: 'FileCodeBox'
    },
    settings: {
      name: 'Nombre del sitio',
      description: 'Descripción del sitio',
      uploadlimit: 'Límite de carga',
      explain:'Descripción de la interfaz',
      errorlimit: 'Límite de errores',
      keywords: 'Palabras clave',
      background: 'Imagen de fondo',
      admin_token: 'Contraseña de administrador',
      uploadSize: 'Tamaño del archivo',
      uploadSizeNote: 'Tamaño máximo del archivo, en bytes: (Bytes), 1mb=1 * 1024 * 1024',
      openUpload: {
        title: 'Habilitar carga',
        open: 'Habilitar carga de invitados',
        close: 'Deshabilitar carga de invitados',
        note: 'Después de desactivar, debe iniciar sesión en el backend para cargar',
      },
      file_storage: {
        title: 'Motor de almacenamiento',
        local: 'Almacenamiento local',
        s3: 'Almacenamiento S3',
        note: 'FileCodeBox necesita reiniciarse después de la actualización',
      },
      mei: 'Cada',
      minute: 'Minuto',
      upload: 'Cargar',
      files: 'Archivos',
      allow: 'Permitir',
      errors: 'Errores',
      save: 'Guardar',
      saveSuccess: 'Guardado con éxito',
    },
    fileView: {
      code: 'Código de recogida',
      prefix: 'Prefijo del archivo',
      suffix: 'Sufijo del archivo',
      text: 'Texto',
      used_count: 'Conteo de uso',
      expired_count: 'Veces disponibles',
      size: 'Tamaño del archivo',
      expired_at: 'Fecha de expiración',
      file_path: 'Ruta del archivo',
      action: 'Acción',
      delete: 'Eliminar',
      delete_success: 'Eliminado con éxito',
      forever: 'Permanente',
      unlimited_count: 'Veces ilimitadas',
      download: 'Descargar',
      download_fail: 'Fallo al guardar el archivo, intente nuevamente más tarde~',
    },
    menu: {
      fileManage: 'Gestión de archivos',
      systemSetting: 'Configuración del sistema',
      about: 'Sobre nosotros',
      color: 'Modo de color',
      signout: 'Cerrar sesión',
    },
    login: {
      managePassword: 'Contraseña de administrador',
      passwordNotEmpty: 'La contraseña no puede estar vacía',
      login: 'Iniciar sesión',
      loginSuccess: 'Inicio de sesión exitoso',
      loginError: 'Error al iniciar sesión',
    }
  },
  msg:{
    fileOverSize: 'Archivo demasiado grande',
    fileUploadFail: 'Error de carga',
    fileUploadSuccess: 'Carga exitosa',
  }
};