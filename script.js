// Функція для створення масиву з випадковими значеннями
 function generateArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 100)); // Генеруємо випадкові числа від 0 до 99
    }
    return arr;
  }

  // Функція для знаходження максимального та мінімального значень серед елементів з парними та непарними індексами
  function findMinMax(arr) {
    var evenMax = -Infinity;
    var evenMin = Infinity;
    var oddMax = -Infinity;
    var oddMin = Infinity;

    for (var i = 0; i < arr.length; i++) {
      if (i % 2 === 0) { // Парний індекс
        if (arr[i] > evenMax) {
          evenMax = arr[i];
        }
        if (arr[i] < evenMin) {
          evenMin = arr[i];
        }
      } else { // Непарний індекс
        if (arr[i] > oddMax) {
          oddMax = arr[i];
        }
        if (arr[i] < oddMin) {
          oddMin = arr[i];
        }
      }
    }

    return {
      evenMax: evenMax,
      evenMin: evenMin,
      oddMax: oddMax,
      oddMin: oddMin
    };
  }

  // Функція для сортування масиву у порядку зменшення методом вибору
  function selectionSort(arr) {
    var n = arr.length;

    for (var i = 0; i < n - 1; i++) {
      var maxIndex = i;
      for (var j = i + 1; j < n; j++) {
        if (arr[j] > arr[maxIndex]) {
          maxIndex = j;
        }
      }
      if (maxIndex !== i) {
        var temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
      }
    }
    return arr;
  }

  // Основна функція, яка викликається при натисканні кнопки
  function main() {
    var length = parseInt(document.getElementById("length").value);
    var array = generateArray(length);

    var sortedArray = selectionSort(array.slice()); // Створюємо копію масиву для сортування
    document.getElementById("resultSort").innerHTML = "Вхідний масив: " + array.join(", ") + "<br>" +
                                                       "Відсортований масив: " + sortedArray.join(", ");
    
    var resultMinMax = findMinMax(array);
    document.getElementById("resultMinMax").innerHTML = "Максимальне значення серед елементів з парними індексами: " + resultMinMax.evenMax + "<br>" +
                                                         "Мінімальне значення серед елементів з парними індексами: " + resultMinMax.evenMin + "<br>" +
                                                         "Максимальне значення серед елементів з непарними індексами: " + resultMinMax.oddMax + "<br>" +
                                                         "Мінімальне значення серед елементів з непарними індексами: " + resultMinMax.oddMin;
  }