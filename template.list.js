$(function() {
  var page_length = $('.guide_table tbody tr').length;
  calc_pub_process = function() {
    var pub_ended = 0;
    $('.status').each(function() {
      var status = $(this).text();
      if (status == '완료') {
        pub_ended = pub_ended + 1;
      }
    });
    var per_complete = parseInt((pub_ended / page_length) * 100);
    $('.pub_summary').text('퍼블리싱 진행률 [ ' + pub_ended + ' page / ' + page_length + ' page] ' + per_complete + '% 완료');
  }
  calc_pub_process();
  $('a').each(function() {
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
      },
      {
        pageName: "아이디 찾기",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.1.1.2.IdFind",
        complete: "완료",
        note: ""
      },
      {
        pageName: "비밀번호 재설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.1.1.3.PassReset",
        complete: "완료",
        note: ""
      },
      {
        pageName: "비밀번호 재설정(3 개월)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.1.1.4.PassResetMonth",
        complete: "완료",
        note: ""
      },
      {
        pageName: "이용약관 및 개인정보 수집 동의",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.1.2.1.JoinTerms",
        complete: "완료",
        note: ""
      },
      {
        pageName: "회원 정보 입력",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.1.2.1.JoinInput",
        complete: "완료",
        note: ""
      },
      {
        pageName: "회원 가입 완료 안내",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.1.2.1.JoinComplete",
        complete: "완료",
        note: ""
      },
      {
        pageName: "서브 화면 프레임",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.1.3.1.sub",
        complete: "완료",
        note: ""
      },
      {
        pageName: "차량 위치 모니터링",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarLocation",
        complete: "",
        note: ""
      },
      {
        pageName: "그룹별 차량 현황",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarList",
        complete: "",
        note: ""
      },
      {
        pageName: "리스트 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarListSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "그룹별 차량 현황(상세모드)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarListExp",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 세부 정보(차량정보)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarDetail",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 세부 정보(운행경로)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarOperation",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 세부 정보(운행경로 - 타입라인)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarOperationLine",
        complete: "",
        note: ""
      },
      {
        pageName: "지도상 운행 경로 차량 세부 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.FocusDrivingCarDetail",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 세부 정보(원격제어)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarRemoteControl",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 세부 정보(인접차량)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarAdjacent",
        complete: "",
        note: ""
      },
      {
        pageName: "그룹별 이상 차량 현황",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.CarWrongList",
        complete: "",
        note: ""
      },
      {
        pageName: "원격 제어 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.RemoteCarSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "지도상 차량 세부 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.FocusCarDetail",
        complete: "",
        note: ""
      },
      {
        pageName: "지도상 그룹핑된 차량 목록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.1.FocusCarGrouping",
        complete: "",
        note: ""
      },
      {
        pageName: "전체화면(기본화면)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.2.MultiMapFull",
        complete: "",
        note: ""
      },
      {
        pageName: "멀티맵 차량 검색",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.2.MultiMapCarSelect",
        complete: "",
        note: ""
      },
      {
        pageName: "전체화면(3 분할)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.2.MultiMapTri",
        complete: "",
        note: ""
      },
      {
        pageName: "전체화면(4 분할)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.1.2.MultiMapFour",
        complete: "",
        note: ""
      },
      {
        pageName: "배터리 저전압 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.2.1.BatteryLowList",
        complete: "",
        note: ""
      },
      {
        pageName: "전압 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.2.1.BatterySetting",
        complete: "",
        note: ""
      },
      {
        pageName: "SMS 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.2.1.SmsSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 위치(지도)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.2.1.MapFocus",
        complete: "",
        note: ""
      },
      {
        pageName: "도어 개폐 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.3.1.DoorOnOff",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 위치(지도)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.3.1.MapFocus",
        complete: "",
        note: ""
      },
      {
        pageName: "창고 온도 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.4.1.CargoTempList",
        complete: "",
        note: ""
      },
      {
        pageName: "온도 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.4.1.CargoTempSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "SMS 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.4.1.CargoSmsSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "온도 그래프",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.4.1.CargoTempGraphe",
        complete: "",
        note: ""
      },
      {
        pageName: "온도 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.4.2.CarTempList",
        complete: "",
        note: ""
      },
      {
        pageName: "SMS 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.4.2.CarSmsSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "온도 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.4.2.CarTempSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "온도 그래프",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.4.2.CarTempGraphe",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 위치(지도)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.4.2.MapFocus",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 제어 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.5.1.RemoteControlList",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 원격 원격제어 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.2.5.1.RemoteControlSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "운행실적 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.1.1.DrivingList",
        complete: "",
        note: ""
      },
      {
        pageName: "운행기록 다운로드 선택",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.1.1.DrivingRecode",
        complete: "",
        note: ""
      },
      {
        pageName: "유류사용량 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.2.1.FualUsage",
        complete: "",
        note: ""
      },
      {
        pageName: "월별 운행 현황 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.3.1.DrivingHistory",
        complete: "",
        note: ""
      },
      {
        pageName: "차량별 월간 합계",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.3.1.DrivingMonth",
        complete: "",
        note: ""
      },
      {
        pageName: "배차 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.4.1.DispatchInput",
        complete: "",
        note: ""
      },
      {
        pageName: "대여자(운전자) 검색",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.4.1.LenderSelect",
        complete: "",
        note: ""
      },
      {
        pageName: "대여자 일괄 등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.4.1.LenderAllAdd",
        complete: "",
        note: ""
      },
      {
        pageName: "전체 배차 현황 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.4.2.DispatchHistory",
        complete: "",
        note: ""
      },
      {
        pageName: "전체 배차 현황 일별 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.4.2.DispatchDayHistory",
        complete: "",
        note: ""
      },
      {
        pageName: "차량별 배차 현황 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.4.3.DispatchVehicle",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 이상 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.5.1.WrongVehicle",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 위치(지도)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.5.1.MapFocus",
        complete: "",
        note: ""
      },
      {
        pageName: "고장 진단 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.5.2.WrongTrouble",
        complete: "",
        note: ""
      },
      {
        pageName: "에코 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.5.3.EcoList",
        complete: "",
        note: ""
      },
      {
        pageName: "에코 기준 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.5.3.EcoBasic",
        complete: "",
        note: ""
      },
      {
        pageName: "에코 정보 그래프",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.5.3.EcoGraphe",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 위치(지도)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.5.3.MapFocus",
        complete: "",
        note: ""
      },
      {
        pageName: "차계부 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.6.1.VehicleBook",
        complete: "",
        note: ""
      },
      {
        pageName: "정비 항목 관리",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.6.1.MaintenanceSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "일정 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.7.1.Schedule",
        complete: "",
        note: ""
      },
      {
        pageName: "일정 조회(일별)",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.7.1.ScheduleDayList",
        complete: "",
        note: ""
      },
      {
        pageName: "일정 등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.7.1.ScheduleAdd",
        complete: "",
        note: ""
      },
      {
        pageName: "일정 일괄 등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.7.1.ScheduleAllAdd",
        complete: "",
        note: ""
      },
      {
        pageName: "휴식 시간 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.7.2.TimeList",
        complete: "",
        note: ""
      },
      {
        pageName: "과거 데이터 신청",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.7.2.TimeHistoryRequest",
        complete: "",
        note: ""
      },
      {
        pageName: "노선별 승하차 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.8.1.RoutePassengerReport",
        complete: "",
        note: ""
      },
      {
        pageName: "노선별 운행 실적 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.9.1.RouteOperationReport",
        complete: "",
        note: ""
      },
      {
        pageName: "노선 운행 경로 보기",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.9.1.RouteOperationLine",
        complete: "",
        note: ""
      },
      {
        pageName: "정류장별 탑승자 현황 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.9.2.PointPassengerReport",
        complete: "",
        note: ""
      },
      {
        pageName: "SMS 발송 이력 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.3.10.1.SMSHistory",
        complete: "",
        note: ""
      },
      {
        pageName: "사용자 목록 및 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.1.1.UserList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "사용자 차량 그룹 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.1.1.UserVehicleSetting",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "사용자 메뉴 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.1.1.UserMenuSetting",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "메뉴 그룹 목록 및 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.2.1.MenuSetting",
        complete: "완료",
        note: ""
      },
      {
        pageName: "계약 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.3.1.Contract",
        complete: "완료",
        note: ""
      },
      {
        pageName: "차량 목록 및 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.4.1.VehicleList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "단말기조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.4.1.TerminalSelect",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "운전자조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.4.1.DriverSelect",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "차량 그룹 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.4.1.CarGroupSetting",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "업무시간 일괄설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.4.1.WorkHourSetting",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "차량 정보 일괄 업로드",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.4.1.VehicleAllAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "운전자 목록 및 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.4.2.DriverList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "운전자 정보 일괄 업로드",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.4.2.DriverUpload",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "단말기 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.4.3.TerminalList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "그룹 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.5.1.GroupList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "차량 추가",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.5.1.VehicleAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "사용자 추가",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.5.1.UserAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "알림 그룹 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.6.1.AlarmList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "차량 추가",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.6.1.VehicleAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "사용자 추가",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.6.1.UserAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "지점 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.7.1.PointList",
        complete: "",
        note: ""
      },
      {
        pageName: "기본값 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.7.1.BasicZoneSetting",
        complete: "",
        note: "팝업"
      },
      {
        pageName: "ZONE 편집",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.7.1.PointZoneEdit",
        complete: "",
        note: "팝업"
      },
      {
        pageName: "지점 정보 일괄등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.7.1.PointAllAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "지점 입출입 현황",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.7.1.PointInOut",
        complete: "",
        note: "팝업"
      },
      {
        pageName: "지점 차량 도착순서 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.7.1.PointOrderSetting",
        complete: "",
        note: "팝업"
      },
      {
        pageName: "지점 SMS 수신자 등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.7.1.PointSmsSetting",
        complete: "",
        note: "팝업"
      },
      {
        pageName: "에코 정보 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.9.1.EcoSetting",
        complete: "완료",
        note: ""
      },
      {
        pageName: "공통 코드 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.9.1.CodeList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "공통 코드 등록 / 수정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.9.1.CodeAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "정류장 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.10.1.StationList",
        complete: "",
        note: ""
      },
      {
        pageName: "ZONE 편집",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.10.1.StationZoneEdit",
        complete: "",
        note: ""
      },
      {
        pageName: "노선 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.11.1.RouteList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "정류장 추가",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.11.1.StationAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "차량 추가",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.11.1.VehicleAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "노선 보기",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.11.1.RouteMap",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "휴일 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.13.1.ClosingSchedule",
        complete: "완료",
        note: ""
      },
      {
        pageName: "휴일 추가",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.13.1.ClosingScheduleAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "연락처 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.14.1.ContactList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "보호자 추가",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.14.1.ContactAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "연락처 일괄등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.14.1.ContactAllAdd",
        complete: "완료",
        note: "팝업"
      },
      {
        pageName: "사용자 로그",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.4.15.1.UserLogList",
        complete: "완료",
        note: ""
      },
      {
        pageName: "자주하는 질문",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.1.1.FaqList",
        complete: "",
        note: ""
      },
      {
        pageName: "자주하는 질문 상세 / 삭제",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.1.1.FaqView",
        complete: "",
        note: ""
      },
      {
        pageName: "자주하는 질문 등록 / 수정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.1.1.FaqInput",
        complete: "",
        note: ""
      },
      {
        pageName: "1: 1 문의내역",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.2.1.QAList",
        complete: "",
        note: ""
      },
      {
        pageName: "1: 1 문의등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.2.1.QAInput",
        complete: "",
        note: ""
      },
      {
        pageName: "1: 1 문의상세 / 삭제",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.2.1.QAView",
        complete: "",
        note: ""
      },
      {
        pageName: "1: 1 문의답변",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.2.1.QAReply",
        complete: "",
        note: ""
      },
      {
        pageName: "공지사항",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.3.1.Notice",
        complete: "",
        note: ""
      },
      {
        pageName: "공지사항 등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.3.1.NoticeInput",
        complete: "",
        note: ""
      },
      {
        pageName: "공지사항 상세 / 삭제",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.3.1.NoticeView",
        complete: "",
        note: ""
      },
      {
        pageName: "공지사항 수정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.3.1.NoticeEdit",
        complete: "",
        note: ""
      },
      {
        pageName: "도움말",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.4.1.Help",
        complete: "",
        note: ""
      },
      {
        pageName: "도움말 상세 / 삭제",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.4.1.HelpView",
        complete: "",
        note: ""
      },
      {
        pageName: "도움말 수정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.4.1.HelpEdit",
        complete: "",
        note: ""
      },
      {
        pageName: "도움말 등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.4.1.HelpInput",
        complete: "",
        note: ""
      },
      {
        pageName: "API 신청",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.5.1.ApiList",
        complete: "",
        note: ""
      },
      {
        pageName: "API 신청 등록",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.5.1.ApiInput",
        complete: "",
        note: ""
      },
      {
        pageName: "API 신청 상세 / 삭제",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.5.1.ApiView",
        complete: "",
        note: ""
      },
      {
        pageName: "API 신청 수정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.5.1.ApiEdit",
        complete: "",
        note: ""
      },
      {
        pageName: "언어 / 지도설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.6.1.MySetting",
        complete: "",
        note: ""
      },
      {
        pageName: "사용 메뉴 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.6.1.MyMenuSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "차량 업무시간 설정",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.6.1.WorkTimeSetting",
        complete: "",
        note: ""
      },
      {
        pageName: "비밀번호 입력",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.6.2.ProfilePass",
        complete: "",
        note: ""
      },
      {
        pageName: "정보변경",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.6.2.ProfileEdit",
        complete: "",
        note: ""
      },
      {
        pageName: "비밀번호 변경",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.6.2.ProfilePassEdit",
        complete: "",
        note: ""
      },
      {
        pageName: "회원탈퇴",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.5.6.2.ProfileDel",
        complete: "",
        note: ""
      },
      {
        pageName: "긴급출동서비스 신청",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.6.1.1.QuickEmergencyService",
        complete: "",
        note: ""
      },
      {
        pageName: "차량검색",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.6.1.1.QuickCarSelect",
        complete: "",
        note: ""
      },
      {
        pageName: "빠른 배차 신청",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.6.2.1.QuickDispatch",
        complete: "",
        note: ""
      },
      {
        pageName: "배차 가능 차량 검색",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.6.2.1.QuickDispatchCar",
        complete: "",
        note: ""
      },
      {
        pageName: "eTAS 신청 정보",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.6.3.1.Etas",
        complete: "",
        note: ""
      },
      {
        pageName: "eTAS 신청",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.6.3.1.EtasInput",
        complete: "",
        note: ""
      },
      {
        pageName: "eTAS 신청 안내",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.6.3.1.EtasGuide",
        complete: "",
        note: ""
      },
      {
        pageName: "운행기록 정보 조회",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.6.4.1.OperationRecode",
        complete: "",
        note: ""
      },
      {
        pageName: "개인정보처리방침",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.7.1.1.Policy",
        complete: "",
        note: ""
      },
      {
        pageName: "이메일 무단 수집 거부",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.7.1.1.EmailReject",
        complete: "",
        note: ""
      },
      {
        pageName: "이메일 폼",
        fileRoot: "src/main/webapp/WEB-INF/jsp/",
        fileName: "UWEB.7.1.1.EmailForm",
        complete: "",
        note: ""
      }
    ]
  }
})