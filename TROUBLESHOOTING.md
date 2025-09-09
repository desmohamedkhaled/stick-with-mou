# 🔧 Troubleshooting Guide - Stick with Mo

## 🚨 الأخطاء الشائعة والحلول

### 1. **خطأ Manifest.json**
```
Manifest: Line: 1, column: 1, Syntax error.
```

**الحل:**
- تم إنشاء ملف `public/manifest.json` صحيح
- إذا استمر الخطأ، احذف ملف manifest.json من public/ وأعد تشغيل التطبيق

### 2. **خطأ API Connection**
```
Failed to load resource: net::ERR_CONNECTION_REFUSED
localhost:3001/api/products:1
```

**السبب:** الخادم لا يعمل على المنفذ 3001

**الحل:**
```bash
# افتح terminal جديد واشغل الخادم
npm run server

# أو شغل كلاهما معاً
npm run dev
```

### 3. **خطأ toFixed في AdminDashboard**
```
TypeError: r(...).toFixed is not a function
```

**الحل:** تم إصلاحه في الكود - الآن يستخدم `(getTotalSales() || 0).toFixed(2)`

### 4. **خطأ Database Service**
```
Database service error: TypeError: Failed to fetch
```

**الحل:**
1. تأكد من تشغيل الخادم:
   ```bash
   npm run server
   ```

2. أو استخدم البيانات المحلية:
   ```bash
   npm start
   ```

## 🚀 خطوات التشغيل الصحيحة

### **الطريقة الأولى: تشغيل كامل**
```bash
# 1. تثبيت التبعيات
npm install

# 2. إعداد قاعدة البيانات
npm run db:init

# 3. تشغيل كلاهما (الخادم + التطبيق)
npm run dev
```

### **الطريقة الثانية: تشغيل منفصل**
```bash
# Terminal 1: تشغيل الخادم
npm run server

# Terminal 2: تشغيل التطبيق
npm start
```

### **الطريقة الثالثة: التطبيق فقط (بدون قاعدة بيانات)**
```bash
# تشغيل التطبيق مع البيانات المحلية
npm start
```

## 🔧 إعداد متغيرات البيئة

### **إنشاء ملف .env.local:**
```env
REACT_APP_API_URL=http://localhost:3001/api
PORT=3001
```

### **أو استخدام env.example:**
```bash
cp env.example .env.local
```

## 📊 حالة الخدمات

### **التحقق من حالة الخدمات:**
- **React App:** http://localhost:3000
- **API Server:** http://localhost:3001
- **API Health:** http://localhost:3001/api/products

### **إذا لم تعمل API:**
1. تحقق من أن الخادم يعمل
2. تحقق من المنفذ 3001
3. استخدم البيانات المحلية كبديل

## 🛠️ حلول إضافية

### **مسح Cache:**
```bash
# مسح node_modules وإعادة التثبيت
rm -rf node_modules package-lock.json
npm install

# مسح cache المتصفح
Ctrl + Shift + R (Hard Refresh)
```

### **إعادة تعيين قاعدة البيانات:**
```bash
npm run db:reset
```

### **تشغيل في وضع التطوير:**
```bash
# مع debug logs
DEBUG=* npm run dev

# أو
npm run dev -- --verbose
```

## 📱 اختبار الوظائف

### **الوظائف الأساسية:**
- ✅ الصفحة الرئيسية
- ✅ المتجر
- ✅ المنتجات
- ✅ السلة
- ✅ تسجيل الدخول

### **وظائف المدير:**
- ✅ لوحة التحكم
- ✅ إدارة المنتجات
- ✅ الإحصائيات

## 🆘 إذا استمرت المشاكل

### **1. تحقق من المنافذ:**
```bash
# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Mac/Linux
lsof -i :3000
lsof -i :3001
```

### **2. أعد تشغيل الخدمات:**
```bash
# إيقاف جميع العمليات
Ctrl + C

# إعادة التشغيل
npm run dev
```

### **3. تحقق من الأخطاء:**
- افتح Developer Tools (F12)
- تحقق من Console للأخطاء
- تحقق من Network tab للطلبات الفاشلة

---

**🎯 بعد اتباع هذه الخطوات، يجب أن يعمل الموقع بدون أخطاء!**
