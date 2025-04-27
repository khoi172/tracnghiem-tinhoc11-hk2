const quizData = [
    {
        question: "1) Phương án nào dưới đây là khái niệm của CSDL tập trung?",
        options: [
            "Là tập hợp các dữ liệu và hệ quản trị cơ sở dữ liệu lưu trên cùng máy tính.",
            "Là tập hợp dữ liệu của nhiều CSDL khác nhau được lưu trữ trên cùng một máy tính.",
            "Là tập hợp dữ liệu được phân tán trên các máy tính khác nhau của một mạng máy tính.",
            "Là tập hợp dữ liệu của một CSDL được lưu trữ trên một máy tính duy nhất."
        ],
        correct: 3
    },
    {
        question: "2) Phương án nào dưới đây là khái niệm của CSDL phân tán?",
        options: [
            "Là tập hợp các dữ liệu và hệ quản trị cơ sở dữ liệu lưu trên cùng máy tính.",
            "Là tập hợp dữ liệu của nhiều CSDL khác nhau được lưu trữ trên cùng một máy tính.",
            "Là tập hợp dữ liệu được phân tán trên các máy tính khác nhau của một mạng máy tính.",
            "Là tập hợp dữ liệu của một CSDL được lưu trữ trên một máy tính duy nhất."
        ],
        correct: 2
    },
    {
        question: "3) Phương án nào sau đây là kiến trúc phổ biến của các hệ CSDL tập trung?",
        options: [
            "Kiến trúc khách – chủ.",
            "Kiến trúc ngang hàng.",
            "Kiến trúc 1 tầng.",
            "Kiến trúc 2 tầng."
        ],
        correct: 0
    },
    {
        question: "4) Kiến trúc khách – chủ theo mô hình nào dưới đây thường sử dụng trong trường hợp các ứng dụng web lớn?",
        options: [
            "Kiến trúc 1 tầng (1-Tier Architecture).",
            "Kiến trúc 2 tầng (2-Tier Architecture).",
            "Kiến trúc 3 tầng (3-Tier Architecture).",
            "Kiến trúc 4 tầng (4-Tier Architecture)."
        ],
        correct: 2
    },
    {
        question: "5) Kiến trúc khách – chủ theo mô hình nào dưới đây sẽ có hiệu suất kém trong trường hợp có nhiều máy khách cùng khai thác?",
        options: [
            "Kiến trúc 1 tầng (1-Tier Architecture).",
            "Kiến trúc 2 tầng (2-Tier Architecture).",
            "Kiến trúc 3 tầng (3-Tier Architecture).",
            "Kiến trúc 4 tầng (4-Tier Architecture)."
        ],
        correct: 1
    },
    {
        question: "6) Trong các hệ CSDL tập trung theo kiến trúc khách – chủ, thành phần yêu cầu tài nguyên của hệ quản trị CSDL được cài đặt ở đâu trong các đáp án sau?",
        options: [
            "Nhiều máy chủ.",
            "Mạng cục bộ.",
            "Nhiều máy khách.",
            "Máy tính cá nhân."
        ],
        correct: 2
    },
    {
        question: "7) Trong các hệ CSDL tập trung theo kiến trúc khách – chủ, thành phần cung cấp tài nguyên của hệ quản trị CSDL được cài đặt ở đâu trong các đáp án sau?",
        options: [
            "Các máy chủ.",
            "Một máy khách.",
            "Mạng truyền thông.",
            "Một máy chủ."
        ],
        correct: 3
    },
    {
        question: "8) Phương án nào sau đây là một trong những kiến trúc phổ biến của các hệ CSDL phân tán?",
        options: [
            "Kiến trúc khách – chủ.",
            "Kiến trúc ngang hàng.",
            "Kiến trúc 2 tầng.",
            "Kiến trúc 3 tầng."
        ],
        correct: 1
    },
    {
        question: "9) Phương án nào dưới đây là ưu điểm của CSDL tập trung?",
        options: [
            "Việc truy cập và điều phối dữ liệu dễ dàng.",
            "Các chương trình ứng dụng luôn chạy được dù CSDL gặp sự cố.",
            "Phù hợp với các tổ chức, doanh nghiệp trải rộng về mặt địa lí.",
            "Chi phí cao do hệ thống phức tạp."
        ],
        correct: 0
    },
    {
        question: "10) Phương án nào dưới đây là ưu điểm của CSDL phân tán?",
        options: [
            "Cung cấp cái nhìn thống nhất cho người dùng.",
            "Các chương trình ứng dụng không chạy được nếu CSDL gặp sự cố.",
            "Phù hợp với các dịch vụ phủ rộng trên toàn cầu.",
            "Chi phí cao do hệ thống phức tạp."
        ],
        correct: 2
    },
    {
        question: "11) Phát biểu nào sau đây là sai khi nói về ưu điểm của CSDL phân tán?",
        options: [
            "Phù hợp với các tổ chức, doanh nghiệp hoạt động trải rộng về mặt địa lí.",
            "Đảm bảo tính nhất quán dữ liệu và tính an ninh.",
            "Tính sẵn sàng và tính tin cậy của dữ liệu cao hơn.",
            "Mở rộng các tổ chức một cách linh hoạt."
        ],
        correct: 1
    },
    {
        question: "12) Điểm nào sau đây ở mô hình kiến trúc khách – chủ cho hệ CSDL phân tán là khác biệt với ở hệ CSDL tập trung?",
        options: [
            "Hệ CSDL phân tán có nhiều máy khách.",
            "Hệ CSDL phân tán có nhiều mô hình mạng.",
            "Hệ CSDL tập trung có nhiều máy chủ.",
            "Hệ CSDL phân tán có nhiều máy chủ."
        ],
        correct: 3
    },
    {
        question: "13) Hệ thống nào sau đây là một hệ CSDL phân tán?",
        options: [
            "Hệ thống quản lí nhân viên trong công ty ở địa bàn quận Bình Tân.",
            "Hệ thống bán vé máy bay của Việt Nam Airlines.",
            "Hệ thống quản lý lợi nhuận của chuỗi cửa hàng gà rán KFC.",
            "Hệ thống quản lí việc kinh doanh của một cửa hàng bán vật liệu xây dựng."
        ],
        correct: 2
    },
    {
        question: "14) Hệ thống nào sau đây là một hệ CSDL tập trung?",
        options: [
            "Hệ thống quản lí nhân viên trong công ty có nhiều chi nhánh trên toàn quốc.",
            "Hệ thống bán vé máy bay của Việt Nam Airlines.",
            "Hệ thống quản lý chuỗi quán Highlands Coffee.",
            "Hệ thống tìm kiếm thông tin Google."
        ],
        correct: 1
    },
    {
        question: "15) Việc bảo mật thông tin CSDL và bảo vệ hệ CSDL không giúp tránh được mối đe dọa nào sau đây?",
        options: [
            "phá hoại hoạt động của hệ thống.",
            "thay đổi dữ liệu, lấy cắp dữ liệu.",
            "làm lộ bí mật thông tin.",
            "kiểm soát được việc xem dữ liệu."
        ],
        correct: 3
    },
    {
        question: "16) Biện pháp nào sau đây được dùng để bảo vệ sự an toàn của hệ CSDL?",
        options: [
            "Mã hóa dữ liệu.",
            "Nén dữ liệu.",
            "Sử dụng tường lửa.",
            "Thường xuyên thay đổi mật khẩu."
        ],
        correct: 2
    },
    {
        question: "17) Biện pháp nào sau đây được dùng để bảo mật thông tin trong CSDL?",
        options: [
            "Xác thực người truy cập.",
            "Mã hóa dữ liệu.",
            "Sao lưu dự phòng và duy trì biên bản hệ thống.",
            "Sử dụng tường lửa."
        ],
        correct: 1
    },
    {
        question: "18) Biện pháp xác thực nào sau đây được dùng để kiểm tra quyền truy cập tài khoản ngân hàng?",
        options: [
            "Mật khẩu hoặc nhận dạng khuôn mặt.",
            "Nhận dạng vân tay.",
            "Mật khẩu và nhận dạng chữ kí điện tử.",
            "Nhận dạng khuôn mặt và nhận dạng giọng nói."
        ],
        correct: 0
    },
    {
        question: "19) Khi mã hóa dữ liệu để bảo mật thông tin, dữ liệu được chuyển đổi sang một định dạng khác được gọi là gì sau đây?",
        options: [
            "Mã hóa.",
            "Bản mã.",
            "Bản gốc.",
            "Bản sao lưu."
        ],
        correct: 1
    },
    {
        question: "20) Mục tiêu nào sau đây là của mã hóa dữ liệu?",
        options: [
            "Giảm dung lượng lưu trữ dữ liệu.",
            "Thiết lập một rào cản giữa một mạng nội bộ đáng tin cậy và một mạng bên ngoài.",
            "Tạo các bản sao lưu của CSDL và các tệp biên bản, lưu các bản sao ở những vị trí an toàn.",
            "Bảo vệ tính bí mật của dữ liệu kĩ thuật số trong quá trình lưu trữ hoặc truyền trên mạng."
        ],
        correct: 3
    },
    {
        question: "21) Trong công tác quản lí, trường THPT An Lạc sử dụng hệ thống VietSchool để lưu trữ CSDL của học sinh cũng như cấp các quyền truy cập cho các bộ phận quản lí học sinh, phụ huynh và học sinh. Em hãy cho biết nhận định nào sau đây là đúng:",
        options: [
            "Hệ thống quản lí học sinh VietSchool (tính riêng tại trường An Lạc) là một hệ CSDL tập trung nhỏ.",
            "Hệ thống quản lí học sinh VietSchool có mô hình kiến trúc 1 tầng vì toàn bộ CSDL được lưu trữ trên một máy tính và cũng chỉ được khai thác bởi máy tính này.",
            "Để bảo vệ sự an toàn của hệ CSDL trường, biện pháp xác thực bằng mật khẩu được sử dụng để kiểm tra quyền truy cập tài khoản của các đối tượng.",
            "Việc bảo mật thông tin cá nhân của học sinh là không cần thiết vì các đối tượng này chưa mang lại nhiều lợi ích cho xã hội."
        ],
        correct: 0
    },
    {
        question: "Câu 1. Theo định nghĩa, Microsoft Access là loại phần mềm gì sau đây?",
        options: [
            "Hệ quản trị cơ sở dữ liệu",
            "Hệ cơ sở dữ liệu",
            "Quản trị cơ sở dữ liệu",
            "Quản lý cơ sở dữ liệu"
        ],
        correct: 0
    },
    {
        question: "Câu 2. Dải lệnh Home nằm ở vùng nào trên cửa sổ làm việc của Access?",
        options: [
            "Vùng nút lệnh",
            "Vùng làm việc",
            "Vùng điều hướng",
            "Vùng hiển thị"
        ],
        correct: 0
    },
    {
        question: "Câu 3. Biểu tượng nào là biểu tượng của đối tượng bảng trong Access?",
        options: [
            "Biểu tượng A",
            "Biểu tượng B",
            "Biểu tượng C",
            "Biểu tượng D"
        ],
        correct: 0
    },
    {
        question: "Câu 4. Một tệp cơ sở dữ liệu của Microsoft Access 2019 có đuôi tên là gì?",
        options: [
            ".accdb",
            ".accdt",
            ".mdb",
            ".mdt"
        ],
        correct: 0
    },
    {
        question: "Câu 5. Có bao nhiêu cách để tạo mới một cơ sở dữ liệu trong Access?",
        options: [
            "2",
            "3",
            "4",
            "1"
        ],
        correct: 0
    },
    {
        question: "Câu 6. Trên cửa sổ làm việc của Microsoft Access không có vùng nào sau đây?",
        options: [
            "Vùng hiển thị",
            "Vùng nút lệnh",
            "Vùng điều hướng",
            "Vùng làm việc"
        ],
        correct: 0
    },
    {
        question: "Câu 7. Khi một đối tượng trong Access được mở, bên cạnh việc đối tượng sẽ xuất hiện trong vùng làm việc thì ở trên sẽ còn xuất hiện thứ gì nữa sau đây để thể hiện rằng đối tượng đó đang được mở?",
        options: [
            "Thẻ tên",
            "Tiêu đề",
            "Thông báo",
            "Biểu tượng"
        ],
        correct: 0
    },
    {
        question: "Câu 8. Mỗi cửa sổ Access có thể làm việc với bao nhiêu cơ sở dữ liệu?",
        options: [
            "1",
            "2",
            "4",
            "Nhiều"
        ],
        correct: 0
    },
    {
        question: "Câu 9. Cách nào sau đây là sai khi nói về các cách thay đổi khung nhìn trong Access?",
        options: [
            "Nháy giữ chuột vào đối tượng để hiện danh sách khung nhìn, sau đó chọn khung nhìn thích hợp.",
            "Nháy chuột vào nút lệnh View để hiển thị danh sách chọn khung nhìn, sau đó chọn khung nhìn thích hợp.",
            "Nháy chuột vào các nút lệnh chọn khung nhìn có sẵn ở góc phải dưới của cửa sổ Access.",
            "Nháy chuột phải lên tên của đối tượng đang mở và chọn khung nhìn thích hợp."
        ],
        correct: 0
    },
    {
        question: "Câu 10. Phát biểu nào sau đây là đúng khi nói về Microsoft Access?",
        options: [
            "Access kiểm soát các truy cập của người dùng đối với dữ liệu.",
            "Access tạo ra môi trường khó khăn để tạo lập cơ sở dữ liệu.",
            "Access không cho phép lưu trữ và cập nhật dữ liệu bên trong nó.",
            "Access không cung cấp công cụ để khai thác đến dữ liệu."
        ],
        correct: 0
    },
    {
        question: "Câu 11. Đáp án nào sau đây là đúng khi nói đến các khung nhìn của đối tượng bảng?",
        options: [
            "Design View và Datasheet View",
            "Design View và Table View",
            "Layout View và Table View",
            "Layout View và Datasheet View"
        ],
        correct: 0
    },
    {
        question: "Câu 12. Trong chế độ thiết kế của bảng, ta sẽ nhập tên trường vào vị trí nào trên vùng làm việc Access?",
        options: [
            "Field Name",
            "Data Type",
            "Description",
            "Field Properties"
        ],
        correct: 0
    },
    {
        question: "Câu 13. Trong chế độ thiết kế của bảng, để thay đổi thông số liên đến độ dài của văn bản hay để thay đổi định dạng ngày tháng, ta sẽ thực hiện ở vị trí nào trên vùng làm việc Access?",
        options: [
            "Field Properties",
            "Field Name",
            "Data Type",
            "Description"
        ],
        correct: 0
    },
    {
        question: "Câu 14. Đối tượng bảng trong Access có tên là gì sau đây?",
        options: [
            "Table",
            "Form",
            "Query",
            "Report"
        ],
        correct: 0
    },
    {
        question: "Câu 15. Khóa chính của một trường của bảng trong Access có biểu tượng là gì?",
        options: [
            "Chìa khóa",
            "Ổ khóa",
            "Hoa thị",
            "Vô cực"
        ],
        correct: 0
    },
    {
        question: "Câu 16. Kiểu dữ liệu Date/Time trong Access có thể hiển thị thời gian trong phạm vi nào sau đây?",
        options: [
            "Từ năm 1900 – 9999",
            "Từ năm 1800 – 9999",
            "Từ năm 1900 – 2999",
            "Từ năm 1800 – 2999"
        ],
        correct: 0
    },
    {
        question: "Câu 17. Giả sử trong bảng của cơ sở dữ liệu có một trường dùng để lưu số điện thoại, ta nên thiết lập kiểu dữ liệu nào sau đây cho trường đó?",
        options: [
            "Short Text",
            "Number",
            "Currency",
            "AutoNumber"
        ],
        correct: 0
    },
    {
        question: "Câu 18. Thao tác nào sau đây là không thực hiện được khi trong chế độ thiết kế của đối tượng bảng?",
        options: [
            "Đặt hoặc gỡ bỏ khóa ngoài cho trường.",
            "Xóa trường hoặc chèn thêm trường mới.",
            "Sửa tên hoặc thay đổi kiểu dữ liệu cho trường.",
            "Đặt hoặc gỡ bỏ khóa chính cho trường."
        ],
        correct: 0
    },
    {
        question: "Câu 19. Nhận định nào dưới đây là đúng khi nói về chế độ thiết kế của đối tượng bảng trong Access?",
        options: [
            "Không thể lưu bảng mà không đặt khóa chính cho bảng.",
            "Có thể thiết lập nhiều kiểu dữ liệu khác nhau cho một trường.",
            "Tên trường có thể đặt cùng lúc nhiều tên khác nhau.",
            "Tên trường có thể được để trống."
        ],
        correct: 0
    },
    {
        question: "Câu 20. Nhận định nào dưới đây là đúng khi nói về bảng trong khung nhìn bảng dữ liệu của Access?",
        options: [
            "Cột của bảng được gọi là trường, hàng của bảng gọi là bản ghi.",
            "Cột của bảng được gọi là bản ghi, hàng của bảng gọi là trường.",
            "Bảng bao gồm một trường và nhiều bản ghi.",
            "Bảng bao gồm một bản ghi và nhiều trường."
        ],
        correct: 0
    },
    {
        question: "Câu 1. Để mở hộp thoại Join Properties, ta nháy nút gì ở hộp thoại Edit Relationships?",
        options: [
            "Show Table",
            "Join Type",
            "Create New",
            "Relationship Type"
        ],
        correct: 1
    },
    {
        question: "Câu 2. Chọn thuộc tính cho phép nối dữ liệu liên kết giữa 2 bảng có trong hộp thoại nào?",
        options: [
            "Edit Relationships",
            "Join Properties",
            "Field Properties",
            "Data Type"
        ],
        correct: 1
    },
    {
        question: "Câu 3. Mệnh đề gì chứa từ khóa chỉ định kiểu JOIN để thực hiện kết nối các bản ghi ở các bảng khác nhau?",
        options: [
            "FROM",
            "SELECT",
            "WHERE",
            "DISTINCT"
        ],
        correct: 0
    },
    {
        question: "Câu 4. Xoá mối quan hệ giữa 2 bảng, ta thực hiện như sau:",
        options: [
            "nháy chuột lên đường nối 2 bảng, nhấn Show Table",
            "nháy chuột lên đường nối 2 bảng, nhấn Edit Relationship",
            "nháy chuột chọn mối quan hệ, nhấn lệnh Erase",
            "nháy chuột chọn mối quan hệ, nhấn phím Delete"
        ],
        correct: 3
    },
    {
        question: "Câu 5. Thao tác thiết lập, chỉnh sửa, xoá mối quan hệ giữa 2 bảng trong CSDL bắt đầu bằng cách chọn lệnh gì để mở vùng làm việc với các mối quan hệ đó?",
        options: [
            "Database Tools/Relationships",
            "File/Relationships",
            "Home/Relationships",
            "Create/Relationships"
        ],
        correct: 0
    },
    {
        question: "Câu 6. Chỉnh sửa mối quan hệ giữa 2 bảng, ta thực hiện như sau:",
        options: [
            "Chọn mối quan hệ bằng cách nháy chuột lên đường nối 2 bảng, nhấn Show Table",
            "Chọn mối quan hệ bằng cách nháy chuột lên đường nối 2 bảng, nhấn Edit Relationship",
            "Chọn mối quan hệ bằng cách nháy chuột chọn mối quan hệ, nhấn lệnh Erase",
            "Chọn mối quan hệ bằng cách nháy chuột chọn mối quan hệ, nhấn phím Delete"
        ],
        correct: 1
    },
    {
        question: "Câu 7. Sắp xếp các nội dung sau để hoàn thành quá trình thiết lập mối quan hệ giữa hai bảng: 1. Tạo quan hệ giữa hai bảng. 2. Đưa hộp thể hiện mỗi bảng vào vùng làm việc với các mối quan hệ. 3. Xác định các lựa chọn liên kết dữ liệu.",
        options: [
            "1 → 2 → 3",
            "1 → 3 → 2",
            "2 → 1 → 3",
            "2 → 3 → 1"
        ],
        correct: 2
    },
    {
        question: "Câu 8. Có một số kiểu JOIN khác nhau, trong đó được dùng phổ biến nhất là:",
        options: [
            "OUTER JOIN",
            "LEFT OUTER JOIN",
            "INNER JOIN",
            "RIGHT OUTER JOIN"
        ],
        correct: 2
    },
    {
        question: "Câu 9. Phép nối dùng chỉ nối các bản ghi nếu các giá trị trường được kết nối trùng khớp với nhau là phép nối",
        options: [
            "OUTER JOIN",
            "LEFT OUTER JOIN",
            "INNER JOIN",
            "RIGHT OUTER JOIN"
        ],
        correct: 2
    },
    {
        question: "Câu 10. Phép nối dùng lấy tất cả các bản ghi trong bảng bên trái nhưng chỉ nối với các bản ghi của bảng bên phải khớp giá trị trong trường được kết nối. Đây là phép nối",
        options: [
            "OUTER JOIN",
            "LEFT OUTER JOIN",
            "INNER JOIN",
            "RIGHT OUTER JOIN"
        ],
        correct: 1
    },
    {
        question: "Câu 11. Phép nối trong(Inner join) là phép nối:",
        options: [
            "Chỉ nối các bản ghi nếu các giá trị trường được kết nối trùng khớp với nhau.",
            "Lấy dữ liệu có yêu cầu nối các bản ghi từ hai bảng",
            "Lấy tất cả các bản ghi trong bảng bên trái nhưng chỉ nối với các bản ghi của bảng bên phải khớp giá trị trong trường được kết nối.",
            "Lấy tất cả các bản ghi trong bảng bên phải nhưng chỉ nối với các bản ghi của bảng bên trái khớp giá trị trong trường được kết nối."
        ],
        correct: 0
    },
    {
        question: "Câu 1. Biểu mẫu tách đôi là",
        options: [
            "Vùng hiển thị của biểu mẫu được chia thành hai chiều: dọc, ngang.",
            "Các mục dữ liệu hiển thị trong biểu mẫu kết buộc trực tiếp với các trường trong bảng CSDL và làm thay đổi dữ liệu của trường khi gõ nhập.",
            "Đối lập với biểu mẫu có kết buộc, biểu mẫu không kết buộc không dùng để nhập, chỉnh sữa dữ liệu.",
            "Nửa trên hiển thị các trường của một bản ghi dưới dạng biểu mẫu tờ khai quen thuộc."
        ],
        correct: 0
    },
    {
        question: "Câu 2. Phát biểu nào đúng khi nói về biểu mẫu có kết buộc (bound):",
        options: [
            "Vùng hiển thị của biểu mẫu được chia thành hai chiều: dọc, ngang.",
            "Các mục dữ liệu hiển thị trong biểu mẫu kết buộc trực tiếp với các trường trong bảng CSDL và làm thay đổi dữ liệu của trường khi gõ nhập.",
            "Đối lập với biểu mẫu có kết buộc, biểu mẫu không kết buộc không dùng để nhập, chỉnh sữa dữ liệu.",
            "Nửa trên hiển thị các trường của một bản ghi dưới dạng biểu mẫu tờ khai quen thuộc."
        ],
        correct: 1
    },
    {
        question: "Câu 3. Phát biểu nào đúng khi nói về biểu mẫu nhiều bản ghi là",
        options: [
            "Vùng hiển thị của biểu mẫu được chia thành hai chiều: dọc, ngang.",
            "Các mục dữ liệu hiển thị trong biểu mẫu kết buộc trực tiếp với các trường trong bảng CSDL và làm thay đổi dữ liệu của trường khi gõ nhập.",
            "Hiển thị nhiều bản ghi cùng một lúc, mỗi bản ghi trên một hàng ngang, các trường là các cột, nhìn tương tự như một phần của bảng dữ liệu.",
            "Nửa trên hiển thị các trường của một bản ghi dưới dạng biểu mẫu tờ khai quen thuộc."
        ],
        correct: 2
    },
    {
        question: "Câu 4. Để tạo biểu mẫu tách đôi sau khi chọn lệnh Create/ More Forms",
        options: [
            "Multiples Items",
            "Split Form",
            "Datasheet",
            "Blank Form"
        ],
        correct: 1
    },
    {
        question: "Câu 5. Để tạo biểu mẫu nhiều bản ghi sau khi chọn lệnh Create/ More Forms, ta chọn:",
        options: [
            "Multiples Items",
            "Split Form",
            "Datasheet",
            "Blank Form"
        ],
        correct: 0
    },
    {
        question: "Câu 6. Để tạo biểu mẫu đồng bộ hóa trong hộp thoại Form Wizard ta chọn?",
        options: [
            "Form Wizard",
            "Blank Form",
            "Linked Form",
            "Form with subform(s)"
        ],
        correct: 3
    },
    {
        question: "Câu 7. Để tạo biểu mẫu phân cấp trong hộp thoại Form Wizard ta chọn?",
        options: [
            "Form Wizard",
            "Blank Form",
            "Linked Form",
            "Form with subform(s)"
        ],
        correct: 2
    },
    {
        question: "Câu 8. Để nhập hoặc xem dữ liệu ta chọn chế độ nào của biểu mẫu?",
        options: [
            "Layer View",
            "Form View",
            "Design View",
            "Datasheet View"
        ],
        correct: 1
    },
    {
        question: "Câu 9. Qui trình tạo biểu mẫu phân cấp bằng Form Wizard được thực hiện bởi mấy bước?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        correct: 2
    },
    {
        question: "Câu 10. Nhóm lệnh nào có các nút lệnh để tạo nhanh một biểu mẫu và sau đó sử dụng ngay được?",
        options: [
            "Templates",
            "Tables",
            "Queries",
            "Forms"
        ],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);
const pointsPerQuestion = (10 / quizData.length).toFixed(2);

const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const submitBtn = document.querySelector('.submit-btn');
const progressBar = document.querySelector('.progress-bar');
const questionNumber = document.querySelector('.question-number');
const quizWrapper = document.querySelector('.quiz-wrapper');
const resultContainer = document.querySelector('.result-container');

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;
    questionNumber.textContent = `Câu hỏi ${currentQuestion + 1}/${quizData.length}`;
    
    optionsEl.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.classList.add('option');
        if (userAnswers[currentQuestion] === index) {
            button.classList.add('selected');
        }
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index));
        optionsEl.appendChild(button);
    });

    updateNavigationButtons();
    updateProgressBar();
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

function updateNavigationButtons() {
    prevBtn.style.display = currentQuestion === 0 ? 'none' : 'block';
    nextBtn.style.display = currentQuestion === quizData.length - 1 ? 'none' : 'block';
    submitBtn.style.display = currentQuestion === quizData.length - 1 ? 'block' : 'none';
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score += parseFloat(pointsPerQuestion);
        }
    });
    return Math.min(10, score.toFixed(2));
}

function showResults() {
    quizWrapper.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const finalScore = calculateScore();
    const correctAnswers = userAnswers.filter((answer, index) => answer === quizData[index].correct).length;
    
    document.querySelector('.score').textContent = `${finalScore}/10`;
    document.querySelector('.correct-answers span').textContent = correctAnswers;
    
    const answersList = document.querySelector('.answers-list');
    answersList.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const isCorrect = answer === quizData[index].correct;
        const answerItem = document.createElement('div');
        answerItem.classList.add('answer-item', isCorrect ? 'correct' : 'wrong');
        answerItem.innerHTML = `
            <p><strong>Câu ${index + 1}:</strong> ${quizData[index].question}</p>
            <p>Đáp án của bạn: ${answer !== null ? quizData[index].options[answer] : 'Chưa trả lời'}</p>
            <p>Đáp án đúng: ${quizData[index].options[quizData[index].correct]}</p>
        `;
        answersList.appendChild(answerItem);
    });
}

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
});

submitBtn.addEventListener('click', showResults);

document.querySelector('.restart-btn').addEventListener('click', () => {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    resultContainer.style.display = 'none';
    quizWrapper.style.display = 'block';
    loadQuestion();
});

loadQuestion();