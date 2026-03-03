export interface DepartmentTool {
  name: string;
  cmd: string;
  desc: { en: string; zh: string };
}

export type DepartmentId = 'android' | 'apk' | 'embedded' | 'smart' | 'cloud';

export const departmentTools: Record<DepartmentId, DepartmentTool[]> = {
  android: [
    { name: 'repo', cmd: 'repo init -u <manifest-url> && repo sync -j8', desc: { en: 'Initialize and sync Android source tree', zh: '初始化并同步 Android 源码树' } },
    { name: 'adb', cmd: 'adb devices', desc: { en: 'List connected Android devices', zh: '列出已连接的 Android 设备' } },
    { name: 'fastboot', cmd: 'fastboot flash system system.img', desc: { en: 'Flash system partition via fastboot', zh: '通过 fastboot 刷写系统分区' } },
    { name: 'make/lunch', cmd: 'source build/envsetup.sh && lunch <target>', desc: { en: 'Set up Android build environment', zh: '设置 Android 构建环境' } },
    { name: 'ccache', cmd: 'export USE_CCACHE=1 && ccache -M 50G', desc: { en: 'Enable compiler cache (speeds up rebuilds)', zh: '启用编译器缓存（加速重新构建）' } },
    { name: 'git', cmd: 'git log --oneline -20', desc: { en: 'View recent commit history', zh: '查看最近的提交历史' } },
    { name: 'ninja', cmd: 'ninja -j$(nproc)', desc: { en: 'Parallel build with Ninja build system', zh: '使用 Ninja 构建系统并行构建' } },
    { name: 'JDK', cmd: 'java -version', desc: { en: 'Check Java Development Kit version', zh: '检查 Java 开发工具包版本' } },
    { name: 'simg2img', cmd: 'simg2img system.img system.raw.img', desc: { en: 'Convert sparse image to raw image', zh: '将稀疏镜像转换为原始镜像' } },
    { name: 'logcat', cmd: 'adb logcat -v time *:W', desc: { en: 'Stream device logs (warnings+)', zh: '流式输出设备日志（警告以上）' } },
  ],
  apk: [
    { name: 'apktool', cmd: 'apktool d app.apk -o app_decoded', desc: { en: 'Decompile APK for resource inspection', zh: '反编译 APK 以检查资源' } },
    { name: 'jadx', cmd: 'jadx -d output/ app.apk', desc: { en: 'Decompile APK to Java source code', zh: '将 APK 反编译为 Java 源代码' } },
    { name: 'aapt2', cmd: 'aapt2 dump badging app.apk', desc: { en: 'Display APK package info and permissions', zh: '显示 APK 包信息和权限' } },
    { name: 'bundletool', cmd: 'bundletool build-apks --bundle=app.aab --output=app.apks', desc: { en: 'Build APKs from Android App Bundle', zh: '从 Android App Bundle 构建 APK' } },
    { name: 'apksigner', cmd: 'apksigner sign --ks keystore.jks app.apk', desc: { en: 'Sign APK with keystore', zh: '使用密钥库签名 APK' } },
    { name: 'zipalign', cmd: 'zipalign -v 4 input.apk output.apk', desc: { en: 'Align APK for optimized loading', zh: '对齐 APK 以优化加载' } },
    { name: 'dex2jar', cmd: 'd2j-dex2jar app.apk -o app.jar', desc: { en: 'Convert DEX to JAR for analysis', zh: '将 DEX 转换为 JAR 进行分析' } },
    { name: 'adb install', cmd: 'adb install -r app.apk', desc: { en: 'Install/replace APK on device', zh: '在设备上安装/替换 APK' } },
    { name: 'lint', cmd: './gradlew lint', desc: { en: 'Run Android lint checks', zh: '运行 Android lint 检查' } },
    { name: 'signapk', cmd: 'java -jar signapk.jar platform.x509.pem platform.pk8 in.apk out.apk', desc: { en: 'Sign APK with platform key', zh: '使用平台密钥签名 APK' } },
  ],
  embedded: [
    { name: 'buildroot', cmd: 'make menuconfig && make -j$(nproc)', desc: { en: 'Configure and build embedded Linux system', zh: '配置并构建嵌入式 Linux 系统' } },
    { name: 'cross-compiler', cmd: 'aarch64-linux-gnu-gcc -o app app.c', desc: { en: 'Cross-compile for ARM64 targets', zh: '交叉编译 ARM64 目标' } },
    { name: 'dtc', cmd: 'dtc -I dts -O dtb -o output.dtb input.dts', desc: { en: 'Compile device tree source to binary', zh: '将设备树源码编译为二进制' } },
    { name: 'minicom', cmd: 'minicom -D /dev/ttyUSB0 -b 115200', desc: { en: 'Serial console for board debugging', zh: '用于板子调试的串口控制台' } },
    { name: 'u-boot-tools', cmd: 'mkimage -A arm64 -T kernel -C none -d Image uImage', desc: { en: 'Create U-Boot bootable image', zh: '创建 U-Boot 可启动镜像' } },
    { name: 'openocd', cmd: 'openocd -f interface/ftdi.cfg -f target/stm32.cfg', desc: { en: 'On-chip debugger for JTAG/SWD', zh: '用于 JTAG/SWD 的片上调试器' } },
    { name: 'strace', cmd: 'strace -f -e trace=network ./app', desc: { en: 'Trace system calls and signals', zh: '跟踪系统调用和信号' } },
    { name: 'busybox', cmd: 'busybox ls -la /tmp', desc: { en: 'Swiss-army knife for embedded Linux', zh: '嵌入式 Linux 的万能工具' } },
    { name: 'perf', cmd: 'perf stat -e cache-misses ./app', desc: { en: 'Performance analysis tool', zh: '性能分析工具' } },
    { name: 'ssh', cmd: 'ssh root@192.168.1.100', desc: { en: 'Remote shell to embedded target', zh: '远程登录嵌入式目标' } },
  ],
  smart: [
    { name: 'mosquitto', cmd: 'mosquitto_sub -h broker -t "device/#"', desc: { en: 'Subscribe to MQTT topics', zh: '订阅 MQTT 主题' } },
    { name: 'esptool', cmd: 'esptool.py --port /dev/ttyUSB0 flash_id', desc: { en: 'Flash and manage ESP32/ESP8266 chips', zh: '刷写和管理 ESP32/ESP8266 芯片' } },
    { name: 'platformio', cmd: 'pio run --target upload', desc: { en: 'Build and upload IoT firmware', zh: '构建并上传 IoT 固件' } },
    { name: 'nmap', cmd: 'nmap -sn 192.168.1.0/24', desc: { en: 'Discover devices on local network', zh: '发现局域网上的设备' } },
    { name: 'httpie', cmd: 'http GET http://device-ip/api/status', desc: { en: 'Human-friendly HTTP client for APIs', zh: '友好的 HTTP 客户端，用于 API 调用' } },
    { name: 'avahi', cmd: 'avahi-browse -art', desc: { en: 'Discover mDNS/Bonjour services', zh: '发现 mDNS/Bonjour 服务' } },
    { name: 'screen', cmd: 'screen /dev/ttyUSB0 115200', desc: { en: 'Serial terminal session', zh: '串口终端会话' } },
    { name: 'tshark', cmd: 'tshark -i wlan0 -f "port 1883"', desc: { en: 'Capture and analyze network packets', zh: '捕获和分析网络数据包' } },
    { name: 'bluetoothctl', cmd: 'bluetoothctl scan on', desc: { en: 'Scan and manage Bluetooth devices', zh: '扫描和管理蓝牙设备' } },
    { name: 'openssl', cmd: 'openssl x509 -in cert.pem -text -noout', desc: { en: 'Inspect TLS certificates', zh: '检查 TLS 证书' } },
  ],
  cloud: [
    { name: 'docker', cmd: 'docker compose up -d', desc: { en: 'Start services in detached mode', zh: '以后台模式启动服务' } },
    { name: 'kubectl', cmd: 'kubectl get pods -A', desc: { en: 'List all Kubernetes pods', zh: '列出所有 Kubernetes Pod' } },
    { name: 'terraform', cmd: 'terraform plan', desc: { en: 'Preview infrastructure changes', zh: '预览基础设施变更' } },
    { name: 'aws-cli', cmd: 'aws s3 ls', desc: { en: 'List S3 buckets', zh: '列出 S3 存储桶' } },
    { name: 'helm', cmd: 'helm install myapp ./chart', desc: { en: 'Deploy Helm chart to Kubernetes', zh: '将 Helm chart 部署到 Kubernetes' } },
    { name: 'ansible', cmd: 'ansible-playbook -i inventory deploy.yml', desc: { en: 'Run Ansible deployment playbook', zh: '运行 Ansible 部署剧本' } },
    { name: 'gh', cmd: 'gh pr create --fill', desc: { en: 'Create GitHub pull request', zh: '创建 GitHub Pull Request' } },
    { name: 'jq', cmd: "curl -s api | jq '.data[] | .name'", desc: { en: 'Parse and filter JSON output', zh: '解析和过滤 JSON 输出' } },
    { name: 'nginx', cmd: 'nginx -t && nginx -s reload', desc: { en: 'Test config and reload Nginx', zh: '测试配置并重载 Nginx' } },
    { name: 'redis-cli', cmd: 'redis-cli ping', desc: { en: 'Test Redis server connection', zh: '测试 Redis 服务器连接' } },
  ],
};
