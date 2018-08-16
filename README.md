# [YAAAY!](https://play.google.com/store/apps/details?id=com.juankyapps.YAAAY)

Hecho con amor por Juanky.
YAAAY! es una demo de aplicación nativa usando Nativescript + Angular 5.
La fuente está disponible en GitHub bajo la licencia MIT.
También disponible una versión hecha con AndroidStudio.
YAAAY! ha sido solo probada en Android y está actualmente en la PlayStore.

## Cómo empezar

Estas instrucciones te ayudarán a probar y ejecutar el código de YAAAY! en tu equipo.

### Requisitos previos

Necesitas tener instalado Node.js, Nativescript CLI y los requisitos de cada plataforma (Android e/o iOS).
Sigue la [documentación oficial](https://docs.nativescript.org/angular/start/quick-setup) para instalar todos los frameworks necesarios.

### Instalación

Clona e instala el ejemplo:

```
git clone https://github.com/JCAguilera/yaaay.git
cd yaaay
npm install
```
O puedes abrirlo con [NativeScript Sidekick](https://www.nativescript.org/nativescript-sidekick).

### Ejecutar

Para ejecutar el ejemplo, conecta tu dispositivo (o emulador) y usa este comando:
```
tns run android --bundle --env.aot --env.uglify --env.snapshot
```
Sigue esta [guía oficial](https://docs.nativescript.org/angular/tutorial/ng-chapter-1#12-running-apps) para ejecutar el ejemplo.

### Generar APK

**OJO: Necesitas un certificado válido para construir un APK.**
Para construir un apk (y generar un certificado) lee esta [guía](https://docs.nativescript.org/tooling/publishing/publishing-android-apps).
```
tns build android --bundle --env.aot --env.uglify --env.snapshot
```

## Hecho con

* [NativeScript](https://www.nativescript.org)
* [Angular](https://angular.io)

## Autor

* Esta app fue hecha por **JuanCarlos "Juanky" Aguilera** y subida a [Google Play](https://play.google.com/store/apps/details?id=com.juankyapps.YAAAY) bajo el nombre de [JuankyApps](https://juankyapps.com).

## Licencia

Licencia MIT - ver [LICENSE](LICENSE) para mas detalles.
