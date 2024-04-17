
 function generateArray(length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
  }

  
  function findMinMax(arr) {
    var evenMax = -Infinity;
    var evenMin = Infinity;
    var oddMax = -Infinity;
    var oddMin = Infinity;

    for (var i = 0; i < arr.length; i++) {
      if (i % 2 === 0) { 
        if (arr[i] > evenMax) {
          evenMax = arr[i];
        }
        if (arr[i] < evenMin) {
          evenMin = arr[i];
        }
      } else {
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

  function main() {
    var length = parseInt(document.getElementById("length").value);
    var array = generateArray(length);

    var sortedArray = selectionSort(array.slice()); 
    document.getElementById("resultSort").innerHTML = "Вхідний масив: " + array.join(", ") + "<br>" +
                                                       "Відсортований масив: " + sortedArray.join(", ");
    
    var resultMinMax = findMinMax(array);
    document.getElementById("resultMinMax").innerHTML = "Максимальне значення серед елементів з парними індексами: " + resultMinMax.evenMax + "<br>" +
                                                         "Мінімальне значення серед елементів з парними індексами: " + resultMinMax.evenMin + "<br>" +
                                                         "Максимальне значення серед елементів з непарними індексами: " + resultMinMax.oddMax + "<br>" +
                                                         "Мінімальне значення серед елементів з непарними індексами: " + resultMinMax.oddMin;
  }