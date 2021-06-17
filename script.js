        // Функция очистки класса
        function cleanSelect (select) {
            // Очищаем от стилей
            return $(select).removeClass('ru').removeClass('eng')
        }
        
        // Формируем select и его обработчики
        function formSelect() {
            // получаем выпадающий список с уже очищенными классами
            let select = cleanSelect('.registration__country');

            // Добавляем класс, который соответствует выбранному элементу
            select.addClass(select.val() == '0' ? 'ru' : 'eng');

            // Добавляем стили, чтобы у списка не было видно полосы прокрутки
            select.css({ overflow: 'hidden' });

            // Определяем обработчик обработчик готовности дерева DOM
            select.ready(function () {
                // Очищаем стиль списка, чтобы он не мешал отображению
                cleanSelect(this);
                // Устанавливаем размер, равный количеству элементов
                this.size = $(this).find('option').length;
            });

            // Определяем обработчик на событие ухода мышки с области элемента
            select.on('mouseleave', function () {
                // Устанавливаем обычный размер
                this.size = 1;
                // Добавляем класс стиля в соответствии с выбранным элементом
                cleanSelect(this).addClass($(this).val() == '0' ? 'ru' : 'eng');
            });            
        }

        // После загрузки DOM - получаем список
        $(function () {
            formSelect();
        });