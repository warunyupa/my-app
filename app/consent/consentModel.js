export const json = {
    "title": "หนังสือแจ้งความประสงค์ในสินเชื่อเพื่อนำไปหมุนเวียนทางธุรกิจและยินยอมให้เก็บ รวบรวม ใช้ และเปิดเผยข้อมูล",
    "logoPosition": "right",
    "pages": [
     {
      "name": "form_part1",
      "elements": [
       {
        "type": "panel",
        "name": "question1",
        "elements": [
         {
          "type": "text",
          "name": "userName",
          "title": "ข้าพเจ้า",
          "titleLocation": "left",
          "hideNumber": true,
          "placeholder": "ชื่อ-นามสกุลผู้ขอสินเชื่อ"
         },
         {
          "type": "text",
          "name": "userBy",
          "startWithNewLine": false,
          "title": "โดย",
          "titleLocation": "left",
          "hideNumber": true
         },
         {
          "type": "expression",
          "name": "text1",
          "startWithNewLine": false,
          "title": "ในฐานะผู้มีอำนาจลงนามผูกพันนิติบุคคล",
          "hideNumber": true
         },
         {
          "type": "text",
          "name": "userID",
          "title": "เลขทะเบียนนิติบุคคล/เลขประจำตัวประชาชน",
          "titleLocation": "left",
          "hideNumber": true
         },
         {
          "type": "comment",
          "name": "userAddress",
          "minWidth": "500px",
          "title": "สำหนักงานตั้งอยู่ เลขที่",
          "titleLocation": "left",
          "hideNumber": true
         },
         {
          "type": "text",
          "name": "question6",
          "title": "หมายเลขโทรศัพท์",
          "titleLocation": "left",
          "hideNumber": true,
          "inputType": "tel",
          "placeholder": "01xxxxxxxx"
         }
        ],
        "startWithNewLine": false
       },
       {
        "type": "image",
        "name": "question2",
        "imageLink": "https://api.surveyjs.io/private/Surveys/files?name=3c8a11b2-f910-44a7-811f-9e44bdb0dd94",
        "contentMode": "image",
        "imageFit": "fill",
        "imageHeight": "auto",
        "imageWidth": "100%"
       },
       {
        "type": "radiogroup",
        "name": "consent_ans",
        "title": "คำยินยอม",
        "hideNumber": true,
        "choices": [
         {
          "value": "ัyes",
          "text": "ยินยอม"
         },
         {
          "value": "no",
          "text": "ไม่ยินยอม"
         }
        ]
       }
      ],
      "title": "ส่วนที่ 1"
     }
    ]
   }