
CREATE TABLE diaries (
    id INT AUTO_INCREMENT,
    weather varchar(255),
    manager varchar(255),
    sleep_time INT,
    start time,
    end time,
    comment TEXT,
    PRIMARY KEY  (id)
) engine=InnoDB ;

INSERT INTO diaries (
    id,
    weather,
    manager,
    sleep_time,
    start,
    end,
    comment
) VALUES (
    1,
    '晴れ',
    '山田',
    '12',
    '10:00',
    '18:00',
    'はじめまして'
);