import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [employees, setEmployees] = useState(10);
  const [demoEmail, setDemoEmail] = useState('');

  const manualCost = 50000;
  const serviceCostPerEmployee = 5000;
  const savings = manualCost - (employees * serviceCostPerEmployee);
  const savingsPercent = ((savings / manualCost) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F1E] via-[#0D1424] to-[#0A0F1E]">
      <nav className="fixed top-0 w-full z-50 bg-[#0A0F1E]/80 backdrop-blur-xl border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-cyan">
                <Icon name="Phone" size={24} className="text-[#0A0F1E]" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CallAI Analytics
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">Возможности</a>
              <a href="#benefits" className="text-foreground/70 hover:text-primary transition-colors">Преимущества</a>
              <a href="#pricing" className="text-foreground/70 hover:text-primary transition-colors">Тарифы</a>
              <a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">FAQ</a>
              <Button className="bg-gradient-to-r from-primary to-secondary text-[#0A0F1E] hover:opacity-90 glow-cyan">
                Демо-доступ
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 glow-cyan">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span className="text-sm text-primary font-medium">AI-анализ звонков нового поколения</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Контроль 100% звонков
              </span>
              <br />
              <span className="text-foreground">вместо 5%</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              AI-сервис для отделов продаж. Анализирует сотни звонков в минуту, выявляет ошибки менеджеров 
              и показывает слабые места в реальном времени.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-[#0A0F1E] hover:opacity-90 text-lg px-8 glow-cyan">
                <Icon name="Rocket" size={20} className="mr-2" />
                Получить демо
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8">
                Смотреть кейсы
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="gradient-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">звонков анализируется</div>
              </div>
              <div className="gradient-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  90%
                </div>
                <div className="text-sm text-muted-foreground">экономия бюджета</div>
              </div>
              <div className="gradient-border rounded-2xl p-6 bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform">
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">мониторинг в реальном времени</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Возможности системы
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Полный контроль продаж на базе AI</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Brain',
                title: 'AI-транскрибация',
                description: 'Автоматическое преобразование речи в текст с точностью 98%'
              },
              {
                icon: 'Target',
                title: 'Анализ скриптов',
                description: 'Проверка соблюдения скриптов продаж и выявление отклонений'
              },
              {
                icon: 'TrendingUp',
                title: 'Метрики эффективности',
                description: 'Отслеживание KPI каждого менеджера в режиме реального времени'
              },
              {
                icon: 'AlertTriangle',
                title: 'Выявление ошибок',
                description: 'Автоматическое обнаружение типовых ошибок и слабых мест'
              },
              {
                icon: 'Users',
                title: 'Слив клиентов',
                description: 'Детекция попыток сговора и несанкционированных действий'
              },
              {
                icon: 'BarChart3',
                title: 'Аналитика и отчеты',
                description: 'Детальные отчеты по каждому звонку и сотруднику'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="gradient-border p-6 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Преимущества AI vs Человек
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Почему AI-анализ эффективнее ручного контроля</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="gradient-border p-8 bg-destructive/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="User" size={32} className="text-destructive mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-destructive">Ручной контроль</h3>
                  <p className="text-muted-foreground">Традиционный подход</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-destructive mt-0.5" />
                  <span className="text-muted-foreground">Стоимость: 50 000 ₽/мес</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-destructive mt-0.5" />
                  <span className="text-muted-foreground">Охват: только 5% звонков</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-destructive mt-0.5" />
                  <span className="text-muted-foreground">Без опыта продаж</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-destructive mt-0.5" />
                  <span className="text-muted-foreground">Риск сговора с менеджерами</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" size={20} className="text-destructive mt-0.5" />
                  <span className="text-muted-foreground">Субъективная оценка</span>
                </li>
              </ul>
            </Card>

            <Card className="gradient-border p-8 bg-primary/10 backdrop-blur-sm glow-cyan">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Sparkles" size={32} className="text-primary mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">CallAI Analytics</h3>
                  <p className="text-muted-foreground">AI-решение</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-foreground">От 5 000 ₽ за сотрудника</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-foreground">Анализ 100% звонков</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-foreground">Лучшие мировые AI-модели</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-foreground">100% объективность</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-0.5" />
                  <span className="text-foreground">Анализ в режиме реального времени</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Тарифы и калькулятор
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Рассчитайте вашу экономию</p>
          </div>

          <Card className="gradient-border p-8 bg-card/50 backdrop-blur-sm max-w-2xl mx-auto mb-12 glow-purple">
            <h3 className="text-2xl font-bold mb-6 text-center">Калькулятор экономии</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Количество менеджеров по продажам</label>
                <Input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value) || 1)}
                  className="bg-background/50 border-primary/20"
                  min="1"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/20">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Ручной контроль</div>
                  <div className="text-2xl font-bold text-destructive">{manualCost.toLocaleString()} ₽</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">CallAI Analytics</div>
                  <div className="text-2xl font-bold text-primary">{(employees * serviceCostPerEmployee).toLocaleString()} ₽</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 text-center glow-cyan">
                <div className="text-sm text-muted-foreground mb-2">Ваша экономия</div>
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {savings > 0 ? `${savings.toLocaleString()} ₽` : '0 ₽'}
                </div>
                <div className="text-lg text-foreground">
                  {savings > 0 ? `Это ${savingsPercent}% от текущих затрат` : 'При 10 сотрудниках вы экономите 0 ₽'}
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Старт',
                price: '5 000',
                description: 'До 5 сотрудников',
                features: ['AI-транскрибация', 'Базовая аналитика', 'Email поддержка', 'Хранение 30 дней']
              },
              {
                name: 'Бизнес',
                price: '4 000',
                description: 'От 6 до 20 сотрудников',
                features: ['Все из Старт', 'Продвинутая аналитика', 'Чат поддержка 24/7', 'Хранение 90 дней', 'API доступ'],
                popular: true
              },
              {
                name: 'Корпорация',
                price: 'По запросу',
                description: '20+ сотрудников',
                features: ['Все из Бизнес', 'Персональный менеджер', 'Кастомная интеграция', 'Безлимитное хранение', 'SLA 99.9%']
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`gradient-border p-8 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all ${plan.popular ? 'glow-cyan ring-2 ring-primary/50' : ''}`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-primary to-secondary text-[#0A0F1E] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                  {plan.price}{plan.price !== 'По запросу' && ' ₽'}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-[#0A0F1E] hover:opacity-90">
                  Выбрать тариф
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="gradient-border p-12 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm text-center glow-cyan">
            <Icon name="Rocket" size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Попробуйте бесплатно
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Получите доступ к демо-версии на 14 дней. Проанализируйте до 100 звонков бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваш email"
                value={demoEmail}
                onChange={(e) => setDemoEmail(e.target.value)}
                className="bg-background/50 border-primary/20"
              />
              <Button className="bg-gradient-to-r from-primary to-secondary text-[#0A0F1E] hover:opacity-90 whitespace-nowrap glow-cyan">
                Получить демо
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Частые вопросы
              </span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как быстро происходит интеграция?',
                a: 'Интеграция занимает от 1 до 3 дней в зависимости от вашей телефонии. Наша команда поддержки помогает на каждом этапе.'
              },
              {
                q: 'Какие системы телефонии поддерживаются?',
                a: 'Мы поддерживаем все популярные системы: МТС, Билайн, Мегафон, Ростелеком, а также облачные решения (Манго, UIS, Sipuni и др.)'
              },
              {
                q: 'Безопасны ли данные звонков?',
                a: 'Да. Все данные хранятся в зашифрованном виде на серверах в России. Мы соблюдаем 152-ФЗ и имеем сертификаты безопасности.'
              },
              {
                q: 'Можно ли настроить свои критерии анализа?',
                a: 'Абсолютно. Вы можете настроить промпты под ваши скрипты продаж, добавить специфичные для вашего бизнеса метрики.'
              },
              {
                q: 'Что если у меня меньше 5 сотрудников?',
                a: 'Минимальный тариф рассчитан на 1 сотрудника по цене 5000₽. Это все равно выгоднее найма отдельного контролера.'
              },
              {
                q: 'Есть ли мобильное приложение?',
                a: 'Да, доступны приложения для iOS и Android с полным функционалом просмотра аналитики и прослушивания звонков.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="gradient-border rounded-lg px-6 bg-card/50 backdrop-blur-sm">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-primary/10 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Phone" size={18} className="text-[#0A0F1E]" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CallAI
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-аналитика звонков для отделов продаж
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#demo" className="hover:text-primary transition-colors">Демо</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Кейсы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@callai-analytics.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 CallAI Analytics. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
