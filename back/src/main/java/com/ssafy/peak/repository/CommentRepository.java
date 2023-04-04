package com.ssafy.peak.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.peak.domain.Comment;

@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {

	int countByEmailAndIdol(String email, String idol);

	Optional<List<Comment>> findByIdol(String idol);
}