(function (global, $){
  'use strict';
   
  var cal = new Calendar();

  // 생성자 함수
  function Calendar() {
    var that = this;
    var currentMonth = new Date();
    currentMonth.setDate(1);
    this.init = function() {
      that.renderCalendar();
      that.btnEvent();
    }

    // 달력 UI 생성 함수
    this.renderCalendar = function() {
      var arrTable = [];
      arrTable.push('<table><colgroup>');
      for (var i = 0; i < 7; i++) {
        arrTable.push('<col width="100">');
      }
      arrTable.push('</colgroup><thead><tr>');
      var arrWeek = "일월화수목금토".split("");
      for (var i = 0, len = arrWeek.length ; i < len; i++) {
        var dayClass = '';
        dayClass += i % 7 === 0 ? 'sun' : '';
        dayClass += i % 7 === 6 ? 'sat' : '';
        arrTable.push('<td class="'+dayClass+'">' + arrWeek[i] + '</td>');
      }
      arrTable.push('</tr></thead>');
      arrTable.push('<tbody>');
      var willChangeMonth = new Date(currentMonth.getTime());

      // 1일에서 1일의 요일을 빼면 그 주 첫번째 날이 나온다.
      willChangeMonth.setDate(willChangeMonth.getDate() - willChangeMonth.getDay());

      for (var i = 0; i < 100; i++) {
        if( i % 7 == 0) {
          arrTable.push('<tr>');
        }
        
        var dayClass = 'date-cell '
        dayClass += currentMonth.getMonth() !== willChangeMonth.getMonth() ? 'not-this-month ' : '';
        dayClass += i % 7 == 0 ? 'sun' : '';
        dayClass += i % 7 == 6 ? 'sat' : '';        
        arrTable.push('<td class="'+dayClass+'">' + willChangeMonth.getDate()+ '</td>' );
        willChangeMonth.setDate(willChangeMonth.getDate() + 1);

        if ( i % 7 == 6 ) {
          arrTable.push('</tr>');
          if( currentMonth.getMonth() !== willChangeMonth.getMonth()) {
            break;
          }
        }
      }
      arrTable.push('</tbody></table>');
      $('#calendar').html(arrTable.join(""));
      that.changeYearMonth();  
    }
    // 달력 이동시 상단에 현재 년 월 다시 표시
    this.changeYearMonth = function() {
      $('#yearMonth').text(that.getYearMonth(currentMonth).substr(0,8));
    }
    // 날짜 객체를 년 월 문자 형식으로 변환
    this.getYearMonth = function(o) {
      var arrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return arrMonth[o.getMonth()] + ' ' + o.getFullYear(); 
    }
    // Prev, Next 버튼 이벤트
    this.btnEvent = function() {
      $('#btnPrev').on('click', that.onPrevCalendar);
      $('#btnNext').on('click', that.onNextCalendar);
    }
    // 이전 달력
    this.onPrevCalendar = function() {
      currentMonth.setMonth(currentMonth.getMonth() - 1);
      that.renderCalendar();
    }
    this.onNextCalendar = function() {
      currentMonth.setMonth(currentMonth.getMonth() + 1);
      that.renderCalendar();      
    }
  }
  cal.init();  

})(window, window.jQuery);