DROP DATABASE IF EXISTS bloggy_db;
CREATE DATABASE bloggy_db;


CREATE TABLE `bloggy_db`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

  CREATE TABLE `bloggy_db`.`post` (
  `idpost` INT NOT NULL AUTO_INCREMENT,
  `post_content` LONGTEXT NOT NULL,
  `post_tag` VARCHAR(45) NOT NULL,
  `user_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpost`));

  INSERT INTO `user` (`first_name`,`last_name`,`username`,`email`,`password`)
  VALUES
    ("Hamilton","Graiden","consequat","donec.nibh@hotmail.couk","TGN53YHM7CV"),
    ("Noel","Blaze","facilisis","nec@hotmail.couk","YUK81IVX5WS"),
    ("Kelly","Leonard","Maecenas","nascetur.ridiculus.mus@aol.com","DDK58QCY7II"),
    ("Alyssa","Amy","non,","rutrum.urna@protonmail.couk","BQE67EYP0GA"),
    ("Melodie","Leo","quam.","ipsum.leo.elementum@icloud.ca","PEY93OKH7GH");
    ("Barclay","Gary","pede,","non.dapibus@outlook.com","NUL85JMX7CL"),
    ("Rose","Chastity","et,","volutpat.nulla@aol.com","RUN55DVA3ZR"),
    ("Thane","Flynn","dui.","suspendisse.dui@protonmail.com","FYX24PFC8AS"),
    ("Kamal","Keelie","natoque","nulla@google.org","SJT32HAB7XF"),
    ("Selma","Colin","consequat","ipsum.non@protonmail.net","UUE44WMW7KR");
    ("Brady","Philip","neque.","turpis.in@hotmail.net","IWM85CEA2SG"),
    ("Dean","Fiona","ac","vel.quam@icloud.ca","GIQ15GDF5JR"),
    ("Jena","Illiana","nulla.","non.luctus@icloud.org","GJS96DHM6MH"),
    ("Tashya","Tiger","pede.","quis@icloud.com","QPQ57OHD5ED"),
    ("Laith","Xandra","fermentum","tincidunt@google.edu","ZQM17KZH9ZF");
    ("Brady","Philip","neque.","turpis.in@hotmail.net","IWM85CEA2SG"),
    ("Dean","Fiona","ac","vel.quam@icloud.ca","GIQ15GDF5JR"),
    ("Jena","Illiana","nulla.","non.luctus@icloud.org","GJS96DHM6MH"),
    ("Tashya","Tiger","pede.","quis@icloud.com","QPQ57OHD5ED"),
    ("Laith","Xandra","fermentum","tincidunt@google.edu","ZQM17KZH9ZF");


INSERT INTO `myTable` (`username`,`post_title`,`post_content`)
VALUES
  ("Donec","Tempor Augue Inc.","pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante"),
  ("Nunc","Mauris Ut Institute","libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum"),
  ("volutpat","Id Enim Curabitur Associates","at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi"),
  ("Ut","Duis Dignissim Limited","ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at"),
  ("nunc.","Adipiscing Elit Etiam LLC","interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper"),
  ("et","Dignissim Magna A Corp.","urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas"),
  ("sit","Enim Sit LLC","urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci"),
  ("eu","Lobortis Quam A Limited","eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede"),
  ("ullamcorper,","Tempor Erat Limited","ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non,"),
  ("libero","Metus Sit PC","odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh.");
