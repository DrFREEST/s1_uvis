$(function () {
  var page_length = $('.guide_table tbody tr').length;
  calc_pub_process = function () {
    var pub_ended = 0;
    $('.status').each(function () {
      var status = $(this).text();
      if (status == '완료') {
        pub_ended = pub_ended + 1;
      }
    });
    var per_complete = parseInt((pub_ended / page_length) * 100);
    $('.pub_summary').text('퍼블리싱 진행률 [ ' + pub_ended + ' page / ' + page_length + ' page] ' + per_complete + '% 완료');
  }
  calc_pub_process();
  $('a').each(function () {
    $(this).attr('target', '_blank')
  });
  // vue
});
// Vue.component('todo-item', {
//   props: ['todo'],
//   template: '<td class="file"></td><td class="file"></td><td class="status"></td><td class="note"></td>'
// });
var fileRoot = "src/main/webapp/WEB-INF/jsp/";
var pub_list = new Vue({
  el: '#listBody',
  data: {
    pageList: [{
      pageName: "메인(로그인)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.1.1.1.login",
      complete: "완료",
      note: ""
    }, {
      pageName: "아이디 찾기",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.1.1.2.IdFind",
      complete: "완료",
      note: ""
    }, {
      pageName: "아이디 찾기 결과",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.1.1.2.IdFindResult",
      complete: "완료",
      note: ""
    }, {
      pageName: "비밀번호 재설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.1.1.3.PassReset",
      complete: "완료",
      note: ""
    }, {
      pageName: "비밀번호 재설정(3 개월)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.1.1.4.PassResetMonth",
      complete: "완료",
      note: ""
    }, {
      pageName: "이용약관 및 개인정보 수집 동의",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.1.2.1.JoinTerms",
      complete: "완료",
      note: ""
    }, {
      pageName: "회원 정보 입력",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.1.2.1.JoinInput",
      complete: "완료",
      note: ""
    }, {
      pageName: "회원 가입 완료 안내",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.1.2.1.JoinComplete",
      complete: "완료",
      note: ""
    }, {
      pageName: "서브 화면 프레임",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.1.3.1.sub",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량 위치 모니터링",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarLocation",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "그룹별 차량 현황",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarList",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "리스트 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarListSetting",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "그룹별 차량 현황(상세모드)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarListExp",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "차량 세부 정보(차량정보)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarDetail",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "차량 세부 정보(운행경로)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarOperation",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "차량 세부 정보(운행경로 - 타입라인)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarOperationLine",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "지도상 운행 경로 차량 세부 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.FocusDrivingCarDetail",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "차량 세부 정보(원격제어)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarRemoteControl",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "차량 세부 정보(인접차량)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarAdjacent",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "그룹별 이상 차량 현황",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.CarWrongList",
      complete: "완료",
      note: "지도화면"
    }, {
      pageName: "원격 제어 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.RemoteCarSetting",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarWrongList 에서 구현됨"
    }, {
      pageName: "지도상 차량 세부 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.FocusCarDetail",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "지도상 그룹핑된 차량 목록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.1.FocusCarGrouping",
      complete: "완료",
      note: "지도화면 UWEB.2.1.1.CarLocation 에서 구현됨"
    }, {
      pageName: "전체화면(기본화면)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.2.MultiMapFull",
      complete: "완료",
      note: "지도화면"
    }, {
      pageName: "멀티맵 차량 검색",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.2.MultiMapCarSelect",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "전체화면(2 분할)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.2.MultiMapTwo",
      complete: "완료",
      note: "지도화면"
    }, {
      pageName: "전체화면(3 분할)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.2.MultiMapTri",
      complete: "완료",
      note: "지도화면"
    }, {
      pageName: "전체화면(4 분할)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.1.2.MultiMapFour",
      complete: "완료",
      note: "지도화면"
    }, {
      pageName: "배터리 저전압 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.2.1.BatteryLowList",
      complete: "완료",
      note: ""
    }, {
      pageName: "전압 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.2.1.BatterySetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "SMS 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.2.1.SmsSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차량 위치(지도)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.2.1.MapFocus",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "도어 개폐 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.3.1.DoorOnOff",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량 위치(지도)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.3.1.MapFocus",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "창고 온도 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.4.1.CargoTempList",
      complete: "완료",
      note: ""
    }, {
      pageName: "온도 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.4.1.CargoTempSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "SMS 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.4.1.CargoSmsSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "온도 그래프",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.4.1.CargoTempGraphe",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차량 온도 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.4.2.CarTempList",
      complete: "완료",
      note: ""
    }, {
      pageName: "SMS 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.4.2.CarSmsSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "온도 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.4.2.CarTempSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "온도 그래프",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.4.2.CarTempGraphe",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차량 위치(지도)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.4.2.MapFocus",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차량 제어 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.5.1.RemoteControlList",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량 원격 원격제어 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.5.1.RemoteControlSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "출동서비스현황",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.2.6.1.EmergencyServiceHistory",
      complete: "완료",
      note: ""
    }, {
      pageName: "운행실적 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.1.1.DrivingList",
      complete: "완료",
      note: ""
    }, {
      pageName: "운행기록 다운로드 선택",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.1.1.DrivingRecode",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "유류사용량 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.2.1.FualUsage",
      complete: "완료",
      note: ""
    }, {
      pageName: "월별 운행 현황 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.3.1.DrivingHistory",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량별 월간 합계",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.3.1.DrivingMonth",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "배차 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.4.1.DispatchInput",
      complete: "완료",
      note: ""
    }, {
      pageName: "대여자(운전자) 검색",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.4.1.LenderSelect",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "대여자 일괄 등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.4.1.LenderAllAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "전체 배차 현황 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.4.2.DispatchHistory",
      complete: "완료",
      note: ""
    }, {
      pageName: "전체 배차 현황 일별 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.4.2.DispatchDayHistory",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량별 배차 현황 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.4.3.DispatchVehicle",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량 이상 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.5.1.WrongVehicle",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량 위치(지도)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.5.1.MapFocus",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "고장 진단 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.5.2.WrongTrouble",
      complete: "완료",
      note: ""
    }, {
      pageName: "에코 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.5.3.EcoList",
      complete: "완료",
      note: ""
    }, {
      pageName: "에코 기준 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.5.3.EcoBasic",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "에코 정보 그래프",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.5.3.EcoGraphe",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차량 위치(지도)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.5.3.MapFocus",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차계부 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.6.1.VehicleBook",
      complete: "완료",
      note: ""
    }, {
      pageName: "정비 항목 관리",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.6.1.MaintenanceSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "일정 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.7.1.Schedule",
      complete: "완료",
      note: ""
    }, {
      pageName: "일정 조회(일별)",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.7.1.ScheduleDayList",
      complete: "완료",
      note: ""
    }, {
      pageName: "일정 등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.7.1.ScheduleAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "일정 일괄 등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.7.1.ScheduleAllAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "휴식 시간 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.7.2.TimeList",
      complete: "완료",
      note: ""
    }, {
      pageName: "과거 데이터 신청",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.7.2.TimeHistoryRequest",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "노선별 승하차 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.8.1.RoutePassengerReport",
      complete: "완료",
      note: ""
    }, {
      pageName: "노선별 운행 실적 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.9.1.RouteOperationReport",
      complete: "완료",
      note: ""
    }, {
      pageName: "노선 운행 경로 보기",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.9.1.RouteOperationLine",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "정류장별 탑승자 현황 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.9.2.PointPassengerReport",
      complete: "완료",
      note: ""
    }, {
      pageName: "SMS 발송 이력 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.3.10.1.SMSHistory",
      complete: "완료",
      note: ""
    }, {
      pageName: "사용자 목록 및 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.1.1.UserList",
      complete: "완료",
      note: ""
    }, {
      pageName: "사용자 차량 그룹 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.1.1.UserVehicleSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "사용자 메뉴 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.1.1.UserMenuSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "메뉴 그룹 목록 및 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.2.1.MenuSetting",
      complete: "완료",
      note: ""
    }, {
      pageName: "계약 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.3.1.Contract",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량 목록 및 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.4.1.VehicleList",
      complete: "완료",
      note: ""
    }, {
      pageName: "단말기조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.4.1.TerminalSelect",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "운전자조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.4.1.DriverSelect",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차량 그룹 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.4.1.CarGroupSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "업무시간 일괄설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.4.1.WorkHourSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차량 정보 일괄 업로드",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.4.1.VehicleAllAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "운전자 목록 및 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.4.2.DriverList",
      complete: "완료",
      note: ""
    }, {
      pageName: "운전자 정보 일괄 업로드",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.4.2.DriverUpload",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "단말기 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.4.3.TerminalList",
      complete: "완료",
      note: ""
    }, {
      pageName: "그룹 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.5.1.GroupList",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량 추가",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.5.1.VehicleAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "사용자 추가",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.5.1.UserAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "알림 그룹 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.6.1.AlarmList",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량 추가",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.6.1.VehicleAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "사용자 추가",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.6.1.UserAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "지점 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.7.1.PointList",
      complete: "완료",
      note: ""
    }, {
      pageName: "기본값 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.7.1.BasicZoneSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "ZONE 편집",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.7.1.PointZoneEdit",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "지점 정보 일괄등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.7.1.PointAllAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "지점 입출입 현황",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.7.1.PointInOut",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "지점 차량 도착순서 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.7.1.PointOrderSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "지점 SMS 수신자 등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.7.1.PointSmsSetting",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "에코 정보 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.9.1.EcoSetting",
      complete: "완료",
      note: ""
    }, {
      pageName: "공통 코드 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.9.1.CodeList",
      complete: "완료",
      note: ""
    }, {
      pageName: "공통 코드 등록 / 수정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.9.1.CodeAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "정류장 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.10.1.StationList",
      complete: "완료",
      note: ""
    }, {
      pageName: "ZONE 편집",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.10.1.StationZoneEdit",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "노선 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.11.1.RouteList",
      complete: "완료",
      note: ""
    }, {
      pageName: "정류장 추가",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.11.1.StationAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차량 추가",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.11.1.VehicleAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "노선 보기",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.11.1.RouteMap",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "휴일 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.13.1.ClosingSchedule",
      complete: "완료",
      note: ""
    }, {
      pageName: "휴일 추가",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.13.1.ClosingScheduleAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "연락처 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.14.1.ContactList",
      complete: "완료",
      note: ""
    }, {
      pageName: "보호자 추가",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.14.1.ContactAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "연락처 일괄등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.14.1.ContactAllAdd",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "사용자 로그",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.15.1.UserLogList",
      complete: "완료",
      note: ""
    }, {
      pageName: "긴급배차 팝업",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.4.16.1",
      complete: "완료",
      note: ""
    }, {
      pageName: "자주하는 질문",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.1.1.FaqList",
      complete: "완료",
      note: ""
    }, {
      pageName: "자주하는 질문 상세 / 삭제",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.1.1.FaqView",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "자주하는 질문 등록 / 수정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.1.1.FaqInput",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "1: 1 문의내역",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.2.1.QAList",
      complete: "완료",
      note: ""
    }, {
      pageName: "1: 1 문의등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.2.1.QAInput",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "1: 1 문의상세 / 삭제",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.2.1.QAView",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "1: 1 문의답변",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.2.1.QAReply",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "공지사항",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.3.1.Notice",
      complete: "완료",
      note: ""
    }, {
      pageName: "공지사항 등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.3.1.NoticeInput",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "공지사항 상세 / 삭제",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.3.1.NoticeView",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "공지사항 수정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.3.1.NoticeEdit",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "도움말",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.4.1.Help",
      complete: "완료",
      note: ""
    }, {
      pageName: "도움말 상세 / 삭제",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.4.1.HelpView",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "도움말 수정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.4.1.HelpEdit",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "도움말 등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.4.1.HelpInput",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "API 신청",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.5.1.ApiList",
      complete: "완료",
      note: ""
    }, {
      pageName: "API 신청 등록",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.5.1.ApiInput",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "API 신청 상세 / 삭제",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.5.1.ApiView",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "API 신청 수정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.5.1.ApiEdit",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "언어 / 지도설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.6.1.MySetting",
      complete: "완료",
      note: ""
    }, {
      pageName: "사용 메뉴 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.6.1.MyMenuSetting",
      complete: "완료",
      note: ""
    }, {
      pageName: "차량 업무시간 설정",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.6.1.WorkTimeSetting",
      complete: "완료",
      note: ""
    }, {
      pageName: "비밀번호 입력",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.6.2.ProfilePass",
      complete: "완료",
      note: ""
    }, {
      pageName: "정보변경",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.6.2.ProfileEdit",
      complete: "완료",
      note: ""
    }, {
      pageName: "비밀번호 변경",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.6.2.ProfilePassEdit",
      complete: "완료",
      note: ""
    }, {
      pageName: "회원탈퇴",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.5.6.2.ProfileDel",
      complete: "완료",
      note: ""
    }, {
      pageName: "긴급출동서비스 신청",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.6.1.1.QuickEmergencyService",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "차량검색",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.6.1.1.QuickCarSelect",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "빠른 배차 신청",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.6.2.1.QuickDispatch",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "배차 가능 차량 검색",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.6.2.1.QuickDispatchCar",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "eTAS 신청 정보",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.6.3.1.Etas",
      complete: "완료",
      note: ""
    }, {
      pageName: "eTAS 신청",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.6.3.1.EtasInput",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "eTAS 신청 안내",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.6.3.1.EtasGuide",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "운행기록 정보 조회",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.6.4.1.OperationRecode",
      complete: "완료",
      note: ""
    }, {
      pageName: "개인정보처리방침",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.7.1.1.Policy",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "이메일 무단 수집 거부",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.7.1.1.EmailReject",
      complete: "완료",
      note: "팝업"
    }, {
      pageName: "이메일 폼",
      fileRoot: "src/main/webapp/WEB-INF/jsp/",
      fileName: "UWEB.7.1.1.EmailForm",
      complete: "완료",
      note: ""
    }]
  }
})